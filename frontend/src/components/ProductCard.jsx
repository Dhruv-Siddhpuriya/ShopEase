import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      <Link to={`/product/${product._id}`} className="block relative overflow-hidden bg-gray-50 h-56 shrink-0">
        <img 
          src={getImageUrl(product.image)} 
          alt={product.title} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur text-xs font-bold text-indigo-700 px-2.5 py-1 rounded-full shadow-sm">
           {product.category}
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2 leading-tight mb-2">
            {product.title}
          </h3>
        </Link>
        
        {/* Rating Badge */}
        <div className="flex items-center gap-1.5 mb-2">
            {product.rating > 0 && product.numReviews > 0 ? (
                <>
                    <div className="bg-green-600 shadow-sm text-white text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 tracking-wide leading-none">
                        {product.rating.toFixed(1)} 
                        <svg className="w-2.5 h-2.5 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
                        </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-500 tracking-tight">({product.numReviews})</span>
                </>
            ) : (
                <span className="text-xs font-medium text-gray-400">No Ratings</span>
            )}
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description?.startsWith('[') ? JSON.parse(product.description)[0] : (product.description || 'Premium quality product crafted for excellence.')}
        </p>
        
        <div className="mt-auto flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight">₹{product.price.toLocaleString('en-IN')}</span>
              {product.stock > 0 ? (
                  <span className="text-xs text-green-600 font-medium">In Stock</span>
              ) : (
                  <span className="text-xs text-red-500 font-medium">Out of stock</span>
              )}
            </div>
            {product.stock > 0 ? (
               <Link to={`/product/${product._id}`} className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl hover:bg-indigo-600 hover:text-white transition group-hover:shadow-md">
                 <ShoppingCart className="w-5 h-5" />
               </Link>
            ) : (
                <button disabled className="bg-gray-100 text-gray-400 p-2.5 rounded-xl cursor-not-allowed">
                  <ShoppingCart className="w-5 h-5" />
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
