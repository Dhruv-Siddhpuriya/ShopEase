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
    
    // Review states
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');
    const [reviewLoading, setReviewLoading] = useState(false);
    const [reviewError, setReviewError] = useState('');
    const [reviewSuccess, setReviewSuccess] = useState(false);

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
    }, [id, reviewSuccess]);

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

    const submitReviewHandler = async (e) => {
        e.preventDefault();
        
        if (!rating || rating === 0) {
            setReviewError('Please select a star rating by clicking on the stars.');
            return;
        }

        try {
            setReviewLoading(true);
            setReviewError('');
            await api.post(`/products/${id}/reviews`, {
                rating,
                comment,
            });
            setReviewSuccess(true);
            setRating(0);
            setHoverRating(0);
            setComment('');
            setTimeout(() => setReviewSuccess(false), 3000);
        } catch (err) {
            setReviewError(err.response?.data?.message || err.message);
        } finally {
            setReviewLoading(false);
        }
    };

    if (loading) return <Loader />;
    if (error) return <Message variant="danger">{error}</Message>;

    const reviewsSection = (
        <div className="mt-8 pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            {product.reviews && product.reviews.length === 0 && (
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-gray-500 mb-6">
                    No reviews yet. Be the first to review!
                </div>
            )}
            
            <div className="space-y-4 mb-8">
                {product.reviews && product.reviews.map((review) => (
                    <div key={review._id} className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                            <strong className="font-bold text-gray-800">{review.name}</strong>
                            <div className="text-sm text-yellow-500 font-bold tracking-widest">
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{review.comment}</p>
                        <p className="text-xs text-gray-400">{review.createdAt?.substring(0, 10)}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">Write a Customer Review</h3>
            {reviewError && <div className="mb-4"><Message variant="danger">{reviewError}</Message></div>}
            {reviewSuccess && <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm font-semibold">Review submitted successfully!</div>}
            {user ? (
                <form onSubmit={submitReviewHandler} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Rating *</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <svg
                                        className={`w-8 h-8 ${(hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Comment</label>
                        <textarea rows="3" value={comment} onChange={(e) => setComment(e.target.value)} className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:ring-indigo-500 focus:outline-none resize-none"></textarea>
                    </div>
                    <button type="submit" disabled={reviewLoading} className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold shadow hover:bg-indigo-700 transition disabled:opacity-50">
                        {reviewLoading ? 'Submitting...' : 'Submit Review'}
                    </button>
                </form>
            ) : (
                <Message>
                    Please <Link to={`/login?redirect=/product/${product._id}`} className="font-bold underline text-indigo-600">sign in</Link> to write a review
                </Message>
            )}
        </div>
    );

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

                        {/* Desktop Reviews rendering (Hidden on Mobile) */}
                        <div className="hidden md:block">
                            {reviewsSection}
                        </div>
                    </div>

                    {/* ── Product Details Section ── */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2 text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                            {product.category}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                            {product.title}
                        </h1>

                        {/* Rating block */}
                        {product.rating !== undefined && (
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-yellow-500 text-lg tracking-widest leading-none mt-[-2px]">
                                    {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
                                </div>
                                <span className="text-gray-500 text-sm font-medium">
                                    {product.rating.toFixed(1)} out of 5 ({product.numReviews} review{product.numReviews !== 1 ? 's' : ''})
                                </span>
                            </div>
                        )}

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
                                <p className="whitespace-pre-wrap text-base">{product.description}</p>
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

                {/* Mobile Reviews rendering (Hidden on Desktop) */}
                <div className="md:hidden">
                     {reviewsSection}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
