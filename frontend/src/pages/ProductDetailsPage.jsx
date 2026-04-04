import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ArrowLeft, ShoppingCart, Check, AlertCircle, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const ProductDetailsPage = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const [activeImg, setActiveImg] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { data } = await api.get(`/products/${id}`);
                setProduct(data);
                setActiveImg(0);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    // Build images array — support both old single image and new images[]
    const images = product.images?.length
        ? product.images
        : product.image
            ? [product.image]
            : [];

    const prevImg = () => setActiveImg(i => (i - 1 + images.length) % images.length);
    const nextImg = () => setActiveImg(i => (i + 1) % images.length);

    const addToCartHandler = async () => {
        if (!user) { navigate('/login?redirect=/product/' + id); return; }
        await addToCart(product._id, Number(quantity));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const buyNowHandler = async () => {
        if (!user) { navigate('/login?redirect=/product/' + id); return; }
        await addToCart(product._id, Number(quantity));
        navigate('/checkout');
    };

    if (loading) return <Loader />;
    if (error) return <Message variant="danger">{error}</Message>;

    return (
        <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-6 transition group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back
            </button>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* ── Image Gallery Section ── */}
                    <div className="flex flex-col gap-4">
                        {/* Main Image */}
                        <div
                            className="relative bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center"
                            style={{ minHeight: '380px' }}
                        >
                            {images.length > 0 ? (
                                <>
                                    <img
                                        src={images[activeImg]}
                                        alt={product.title}
                                        className={`max-h-[450px] object-contain transition-all duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'hover:scale-105 cursor-zoom-in'}`}
                                        onClick={() => setIsZoomed(z => !z)}
                                        onError={e => { e.target.src = 'https://placehold.co/400x400?text=No+Image'; }}
                                    />

                                    {/* Zoom hint */}
                                    {!isZoomed && (
                                        <div className="absolute bottom-3 right-3 bg-black/30 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 pointer-events-none">
                                            <ZoomIn className="w-3 h-3" /> Click to zoom
                                        </div>
                                    )}

                                    {/* Arrow Navigation (only if > 1 image) */}
                                    {images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImg}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition z-10"
                                            >
                                                <ChevronLeft className="w-5 h-5 text-gray-700" />
                                            </button>
                                            <button
                                                onClick={nextImg}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition z-10"
                                            >
                                                <ChevronRight className="w-5 h-5 text-gray-700" />
                                            </button>

                                            {/* Dot indicators */}
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                {images.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setActiveImg(i)}
                                                        className={`w-2 h-2 rounded-full transition-all ${i === activeImg ? 'bg-indigo-600 w-4' : 'bg-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="flex items-center justify-center text-gray-300 text-4xl font-bold w-full h-64">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Strip */}
                        {images.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImg(i)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? 'border-indigo-500 shadow-md scale-105' : 'border-gray-200 hover:border-indigo-300'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`thumb-${i}`}
                                            className="w-full h-full object-cover"
                                            onError={e => { e.target.src = 'https://placehold.co/64x64?text=?'; }}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ── Product Details Section ── */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2 text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                            {product.category}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                            {product.title}
                        </h1>

                        <div className="text-4xl font-bold text-gray-900 mb-6">
                            ₹{product.price?.toLocaleString('en-IN')}
                        </div>

                        <div className="text-gray-600 leading-relaxed text-lg mb-8 border-b pb-8">
                            {product.description?.startsWith('[') ? (
                                <ul className="list-disc pl-5 space-y-2">
                                    {JSON.parse(product.description).map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{product.description}</p>
                            )}
                        </div>

                        <div className="mb-6 flex space-x-4 items-center bg-gray-50 p-4 rounded-xl">
                            <span className="text-gray-700 font-medium">Status:</span>
                            {product.stock > 0 ? (
                                <span className="flex items-center text-green-600 font-bold">
                                    <Check className="w-5 h-5 mr-1" /> In Stock ({product.stock})
                                </span>
                            ) : (
                                <span className="flex items-center text-red-600 font-bold">
                                    <AlertCircle className="w-5 h-5 mr-1" /> Out of Stock
                                </span>
                            )}
                        </div>

                        {product.stock > 0 && (
                            <div className="flex items-center space-x-4 mb-8">
                                <label htmlFor="qty" className="text-gray-700 font-medium whitespace-nowrap">Quantity: </label>
                                <select
                                    id="qty" value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    {[...Array(Math.min(product.stock, 10)).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                disabled={product.stock === 0}
                                onClick={addToCartHandler}
                                className={`flex-1 py-4 px-8 flex justify-center items-center text-lg font-bold rounded-xl transition-all shadow-lg ${
                                    product.stock === 0
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : isAdded
                                            ? 'bg-green-600 text-white hover:bg-green-700'
                                            : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
                                }`}
                            >
                                {isAdded ? (
                                    <><Check className="w-6 h-6 mr-3" /> Added</>
                                ) : (
                                    <><ShoppingCart className="w-6 h-6 mr-3" /> Add to Cart</>
                                )}
                            </button>
                            <button
                                disabled={product.stock === 0}
                                onClick={buyNowHandler}
                                className={`flex-1 py-4 px-8 flex justify-center items-center text-lg font-bold rounded-xl transition-all shadow-lg ${
                                    product.stock === 0
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/30'
                                }`}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
