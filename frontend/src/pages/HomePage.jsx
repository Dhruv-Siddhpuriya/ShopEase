import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import api from '../api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ChevronRight, ArrowUpDown, ChevronLeft } from 'lucide-react';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Pagination State
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [sortOrder, setSortOrder] = useState('default');
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const pageParam = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    setPage(pageParam);
  }, [pageParam, keyword, category]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        if (keyword || category) {
          // Fetch paginated filtered products
          let url = `/products?pageNumber=${page}`;
          if (keyword) url += `&keyword=${keyword}`;
          if (category) url += `&category=${category}`;
          const { data } = await api.get(url);
          setProducts(data.products || []);
          setPages(data.pages || 1);
          setTotal(data.total || 0);
        } else {
          // Fetch grouped products for homepage (home view)
          const categoriesList = [
            'Laptops', 'Electronics', 'Fashion', 'Mobiles', 'Home & Kitchen',
            'Beauty', 'Sports', 'Toys', 'Grocery', 'Books', 'Furniture',
            'Appliances', 'Automotive'
          ];
          const groupedData = {};
          await Promise.all(
            categoriesList.map(async (catName) => {
               const { data } = await api.get(`/products?category=${encodeURIComponent(catName)}&pageNumber=1`);
               if (data.products && data.products.length > 0) {
                 groupedData[catName] = data.products.slice(0, 4);
               }
            })
          );
          setGroupedProducts(groupedData);
        }
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [keyword, category, page]);

  // Sorting
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'low_to_high') return a.price - b.price;
    if (sortOrder === 'high_to_low') return b.price - a.price;
    return 0; // default order
  });

  const handlePageChange = (newPage) => {
     if (newPage < 1 || newPage > pages) return;
     const newSearchParams = new URLSearchParams(location.search);
     newSearchParams.set('page', newPage);
     navigate(`/?${newSearchParams.toString()}`);
  };

  const renderPagination = () => {
    if (pages <= 1) return null;
    return (
      <div className="flex justify-center items-center mt-12 mb-4 space-x-2">
         <button 
           onClick={() => handlePageChange(page - 1)}
           disabled={page === 1}
           className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 transition flex items-center bg-white"
         >
           <ChevronLeft className="w-5 h-5" />
         </button>
         {[...Array(pages).keys()].map(x => (
           <button
             key={x + 1}
             onClick={() => handlePageChange(x + 1)}
             className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition ${
                page === x + 1 ? 'bg-indigo-600 text-white shadow-md border-indigo-600' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
             }`}
           >
             {x + 1}
           </button>
         ))}
         <button 
           onClick={() => handlePageChange(page + 1)}
           disabled={page === pages}
           className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 transition flex items-center bg-white"
         >
           <ChevronRight className="w-5 h-5" />
         </button>
      </div>
    );
  };

  const categoriesList = [
    'Laptops', 'Electronics', 'Fashion', 'Mobiles', 'Home & Kitchen',
    'Beauty', 'Sports', 'Toys', 'Grocery', 'Books', 'Furniture',
    'Appliances', 'Automotive'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Search Header Info */}
      {keyword && (
        <div className="bg-white border-b mb-6 px-4 py-3 shadow-sm">
           <h2 className="text-xl font-bold text-gray-800">
             Results for <span className="text-indigo-600">"{keyword}"</span>
             <span className="text-sm font-normal text-gray-500 ml-2">({total} items found)</span>
           </h2>
        </div>
      )}

      {/* Category Banner */}
      {category && (
        <div className="bg-indigo-600 text-white rounded-xl p-8 mb-8 shadow-md">
            <h1 className="text-4xl font-extrabold tracking-tight">{category}</h1>
            <p className="mt-2 text-indigo-100">Explore the best products in {category.toLowerCase()}.</p>
        </div>
      )}
      
      {/* Filtering Options Header */}
      {(keyword || category) && products.length > 0 && (
         <div className="flex justify-between items-center mb-6 px-2">
            <div className="text-sm text-gray-500 font-medium tracking-wide">
                Showing Page {page} of {pages} ({total} Total Results)
            </div>
            <div className="flex items-center gap-2">
               <ArrowUpDown className="h-4 w-4 text-gray-400"/>
               <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-white border border-gray-200 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 font-medium shadow-sm transition"
               >
                 <option value="default">Sort Options</option>
                 <option value="low_to_high">Price: Low to High</option>
                 <option value="high_to_low">Price: High to Low</option>
               </select>
            </div>
         </div>
      )}

      {loading ? (
        <div className="flex justify-center my-20"><Loader /></div>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (keyword || category) && products.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center my-8 flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mb-6">
                 <ArrowUpDown className="w-10 h-10 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-500 mb-8 max-w-md">We couldn't find anything matching your search criteria. Try adjusting your filters or search keywords.</p>
              <button onClick={() => navigate('/')} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30">
                  Clear All Filters
              </button>
          </div>
      ) : (
        <>
          {/* Default Grouped View when no specific category/search is applied */}
          {!category && !keyword ? (
             <div className="space-y-16 mt-6">
               <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white mb-12 shadow-2xl group mx-2">
                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-90 z-0"></div>
                   <div className="relative z-10 p-10 md:p-20 flex flex-col justify-center h-full max-w-2xl">
                       <span className="bg-white/20 text-indigo-100 backdrop-blur font-bold tracking-widest uppercase text-xs mb-6 px-3 py-1.5 rounded-full w-max inline-block">New Season Collection</span>
                       <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">Elevate Your Everyday Style</h1>
                       <p className="text-lg md:text-xl text-indigo-100/80 mb-10 max-w-lg leading-relaxed">Discover the latest trends across electronics, fashion, and premium accessories with exclusive deals inside.</p>
                       <Link to="/?category=Electronics" className="bg-white text-indigo-900 px-8 py-4 text-center rounded-2xl font-extrabold w-max hover:scale-105 transition duration-300 shadow-xl hover:shadow-white/20">
                           Shop Top Electronics
                       </Link>
                   </div>
               </div>

               {/* Categories Carousel */}
               <section className="mb-16 px-2 relative">
                 <div className="flex justify-between items-center mb-8 px-2">
                     <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
                     <div className="flex gap-2">
                         <button onClick={scrollLeft} className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition text-gray-600 hover:text-indigo-600">
                             <ChevronLeft className="w-5 h-5" />
                         </button>
                         <button onClick={scrollRight} className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition text-gray-600 hover:text-indigo-600">
                             <ChevronRight className="w-5 h-5" />
                         </button>
                     </div>
                 </div>
                 <div ref={carouselRef} className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 snap-x [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {[
                      { name: 'Mobiles', image: '/images/categories/category_mobiles_1775367196623.png', link: '/?category=Mobiles' },
                      { name: 'Electronics', image: '/images/categories/category_electronics_1775367850221.png', link: '/?category=Electronics' },
                      { name: 'Appliances', image: '/images/categories/category_appliances_1775367214375.png', link: '/?category=Appliances' },
                      { name: 'Fashion', image: '/images/categories/category_fashion_1775367230187.png', link: '/?category=Fashion' },
                      { name: 'Home & Kitchen', image: '/images/categories/category_homekitchen_1775367865879.png', link: '/?category=Home%20%26%20Kitchen' },
                      { name: 'Toys', image: '/images/categories/category_toys_1775367243438.png', link: '/?category=Toys' },
                      { name: 'Beauty', image: '/images/categories/category_beauty_1775367260376.png', link: '/?category=Beauty' },
                      { name: 'Furniture', image: '/images/categories/category_furniture_1775367276082.png', link: '/?category=Furniture' },
                      { name: 'Sports', image: '/images/categories/category_sports_1775367882462.png', link: '/?category=Sports' },
                      { name: 'Grocery', image: '/images/categories/category_grocery_1775367899644.png', link: '/?category=Grocery' },
                      { name: 'Books', image: '/images/categories/category_books_1775367915157.png', link: '/?category=Books' },
                      { name: 'Automotive', image: '/images/categories/category_automotive_1775367932392.png', link: '/?category=Automotive' },
                      { name: 'Laptops', image: '/images/laptops/laptop_ultrabook_1775368145724.png', link: '/?category=Laptops' },
                    ].map((cat, idx) => (
                       <Link to={cat.link} key={idx} className="flex-shrink-0 w-36 sm:w-48 group snap-start">
                           <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-sm relative bg-gray-50 border border-gray-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                               <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                               <h3 className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center text-white font-extrabold tracking-wider text-base sm:text-lg">{cat.name}</h3>
                           </div>
                       </Link>
                    ))}
                 </div>
               </section>

               {categoriesList.map((catName) => {
                  const catProducts = groupedProducts[catName] || [];
                  if (catProducts.length === 0) return null;
                  return (
                    <section key={catName} className="mb-12">
                        <div className="flex justify-between items-baseline mb-8 px-2 border-b border-gray-200 pb-4">
                           <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                              Trending in {catName}
                           </h2>
                           <Link to={`/?category=${catName}`} className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center transition-all group hover:bg-indigo-50 px-3 py-1.5 rounded-lg">
                               View All Categories <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition" />
                           </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                           {catProducts.map((product) => (
                             <ProductCard key={product._id} product={product} />
                           ))}
                        </div>
                    </section>
                  )
               })}
             </div>
          ) : (
            /* Filtered/Searched View Template */
             <>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
                   {sortedProducts.map((product) => (
                       <ProductCard key={product._id} product={product} />
                   ))}
               </div>
               
               {/* Pagination Component */}
               {renderPagination()}
             </>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
