import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Plus, Edit, Trash2, ArrowLeft, X, Save, Package, Upload, ImagePlus } from 'lucide-react';

const CATEGORIES = [
    'Electronics', 'Fashion', 'Mobiles', 'Home & Kitchen', 'Beauty',
    'Sports', 'Toys', 'Grocery', 'Books', 'Furniture', 'Appliances',
    'Automotive', 'General'
];

const emptyForm = {
    title: '',
    price: '',
    category: 'General',
    stock: '',
    description: '',
};

// ─── Multi-Image Upload Component ────────────────────────────────────────────
const ImageUploader = ({ existingImages = [], onChange }) => {
    const [previews, setPreviews] = useState(existingImages);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        setPreviews(existingImages);
    }, [existingImages.join(',')]);

    const handleFileSelect = async (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        setUploading(true);
        setUploadError('');

        try {
            const formData = new FormData();
            files.forEach(f => formData.append('images', f));

            const { data } = await api.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const newPreviews = [...previews, ...data.urls];
            setPreviews(newPreviews);
            onChange(newPreviews);
        } catch (err) {
            setUploadError(err.response?.data?.message || 'Upload failed. Try again.');
        } finally {
            setUploading(false);
            e.target.value = '';
        }
    };

    const removeImage = (idx) => {
        const updated = previews.filter((_, i) => i !== idx);
        setPreviews(updated);
        onChange(updated);
    };

    const moveFirst = (idx) => {
        if (idx === 0) return;
        const updated = [previews[idx], ...previews.filter((_, i) => i !== idx)];
        setPreviews(updated);
        onChange(updated);
    };

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Images * <span className="text-gray-400 font-normal">(First image = main display)</span>
            </label>

            {uploadError && (
                <p className="text-red-600 text-xs mb-2 bg-red-50 px-3 py-2 rounded-lg">{uploadError}</p>
            )}

            {/* Preview Grid */}
            {previews.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mb-3">
                    {previews.map((url, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden border-2 border-gray-100 bg-gray-50 aspect-square">
                            <img
                                src={url}
                                alt={`img-${idx}`}
                                className="w-full h-full object-cover"
                                onError={e => { e.target.src = 'https://placehold.co/100x100?text=IMG'; }}
                            />
                            {idx === 0 && (
                                <span className="absolute top-1 left-1 bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    MAIN
                                </span>
                            )}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-1">
                                {idx !== 0 && (
                                    <button
                                        type="button"
                                        onClick={() => moveFirst(idx)}
                                        title="Set as main"
                                        className="bg-white text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-md hover:bg-indigo-50 transition"
                                    >
                                        Main
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => removeImage(idx)}
                                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Upload Button */}
            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full border-2 border-dashed border-indigo-300 bg-indigo-50 hover:bg-indigo-100 rounded-xl py-5 flex flex-col items-center gap-2 transition disabled:opacity-60 cursor-pointer"
            >
                {uploading ? (
                    <>
                        <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm font-semibold text-indigo-600">Uploading...</span>
                    </>
                ) : (
                    <>
                        <ImagePlus className="w-8 h-8 text-indigo-400" />
                        <span className="text-sm font-semibold text-indigo-600">Click to select images</span>
                        <span className="text-xs text-gray-400">JPG, PNG, WebP · Up to 10 images · 10MB each</span>
                    </>
                )}
            </button>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileSelect}
            />
        </div>
    );
};

// ─── Product Modal ────────────────────────────────────────────────────────────
const ProductModal = ({ show, onClose, onSave, initialData, isLoading }) => {
    const [form, setForm] = useState(emptyForm);
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (show) {
            setForm(initialData
                ? { title: initialData.title, price: initialData.price, category: initialData.category, stock: initialData.stock, description: initialData.description }
                : emptyForm
            );
            // Seed existing images
            const existing = initialData?.images?.length
                ? initialData.images
                : initialData?.image
                    ? [initialData.image]
                    : [];
            setImages(existing);
            setError('');
        }
    }, [show, initialData]);

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!form.title.trim()) return setError('Title is required.');
        if (!form.price || isNaN(form.price)) return setError('Valid price is required.');
        if (!form.description.trim()) return setError('Description is required.');
        if (images.length === 0) return setError('Please upload at least one image.');
        try {
            await onSave({ ...form, images, image: images[0] });
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">
                        {initialData?._id ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                            {error}
                        </div>
                    )}

                    {/* Image Uploader */}
                    <ImageUploader existingImages={images} onChange={setImages} />

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Product Title *</label>
                        <input
                            name="title" value={form.title} onChange={handleChange}
                            placeholder="e.g. Wireless Bluetooth Headphones"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Price (₹) *</label>
                            <input
                                name="price" type="number" min="0" value={form.price} onChange={handleChange}
                                placeholder="e.g. 999"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Stock Quantity</label>
                            <input
                                name="stock" type="number" min="0" value={form.stock} onChange={handleChange}
                                placeholder="e.g. 50"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                        <select
                            name="category" value={form.category} onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
                        >
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Description *</label>
                        <textarea
                            name="description" value={form.description} onChange={handleChange}
                            rows={3} placeholder="Describe the product..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
                        />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={onClose}
                            className="flex-1 border border-gray-200 text-gray-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
                            Cancel
                        </button>
                        <button type="submit" disabled={isLoading}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 disabled:opacity-60">
                            <Save className="w-4 h-4" />
                            {isLoading ? 'Saving...' : (initialData?._id ? 'Save Changes' : 'Add Product')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ManageProductsPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [savingId, setSavingId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelection = (id) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(products.map(p => p._id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleBulkDelete = async () => {
        if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} products?`)) return;
        try {
            await api.post('/products/bulk-delete', { ids: selectedIds });
            showSuccess(`${selectedIds.length} products deleted!`);
            setSelectedIds([]);
            fetchProducts();
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    const showSuccess = (msg) => { setSuccessMsg(msg); setTimeout(() => setSuccessMsg(''), 3000); };

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get('/products?pageNumber=1&limit=200');
            setProducts(data.products || []);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchProducts(); }, []);

    const openAdd = () => { setEditProduct(null); setShowModal(true); };
    const openEdit = (p) => { setEditProduct(p); setShowModal(true); };

    const handleSave = async (formData) => {
        setSavingId('saving');
        try {
            if (editProduct) {
                await api.put(`/products/${editProduct._id}`, formData);
                showSuccess('Product updated!');
            } else {
                await api.post('/products', formData);
                showSuccess('Product added!');
            }
            setShowModal(false);
            fetchProducts();
        } finally {
            setSavingId(null);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/products/${id}`);
            setConfirmDeleteId(null);
            showSuccess('Product deleted!');
            fetchProducts();
        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    const getProductImage = (p) => {
        if (p.images && p.images.length > 0) return p.images[0];
        return p.image || 'https://placehold.co/60x60?text=N/A';
    };

    return (
        <div className="max-w-7xl mx-auto">
            <ProductModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSave}
                initialData={editProduct}
                isLoading={savingId === 'saving'}
            />

            <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium mb-6 transition group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
                    <Package className="w-8 h-8 text-indigo-500" /> Manage Products
                </h1>
                <div className="flex gap-3">
                    {selectedIds.length > 0 && (
                        <button onClick={handleBulkDelete} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow transition">
                            <Trash2 className="w-4 h-4" /> Delete ({selectedIds.length})
                        </button>
                    )}
                    <button onClick={openAdd} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow transition">
                        <Plus className="w-4 h-4" /> Add Product
                    </button>
                </div>
            </div>

            {successMsg && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                    ✓ {successMsg}
                </div>
            )}

            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 uppercase text-xs text-gray-500 tracking-wider">
                                <th className="p-4 w-10 text-center">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                                        checked={products.length > 0 && selectedIds.length === products.length}
                                        onChange={toggleAll}
                                    />
                                </th>
                                <th className="p-4 font-semibold">ID</th>
                                <th className="p-4 font-semibold">Product</th>
                                <th className="p-4 font-semibold text-right">Price</th>
                                <th className="p-4 font-semibold text-center">Category</th>
                                <th className="p-4 font-semibold text-center">Stock</th>
                                <th className="p-4 font-semibold text-center">Images</th>
                                <th className="p-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map(product => (
                                <tr key={product._id} className={`hover:bg-gray-50 transition text-sm ${selectedIds.includes(product._id) ? 'bg-indigo-50/30' : ''}`}>
                                    <td className="p-4 text-center">
                                        <input 
                                            type="checkbox" 
                                            className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                                            checked={selectedIds.includes(product._id)}
                                            onChange={() => toggleSelection(product._id)}
                                        />
                                    </td>
                                    <td className="p-4 font-mono text-xs text-gray-400">{product._id.substring(0, 8)}…</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={getProductImage(product)}
                                                alt={product.title}
                                                className="w-12 h-12 rounded-lg object-cover border border-gray-100 flex-shrink-0"
                                                onError={e => { e.target.src = 'https://placehold.co/48x48?text=?'; }}
                                            />
                                            <span className="font-semibold text-gray-900 line-clamp-2 max-w-[200px]">{product.title}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-gray-900 text-right">₹{product.price?.toLocaleString('en-IN')}</td>
                                    <td className="p-4 text-center">
                                        <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full">{product.category}</span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
                                            {product.stock}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            {(product.images?.length > 0 ? product.images : product.image ? [product.image] : []).slice(0, 3).map((img, i) => (
                                                <img key={i} src={img} alt="" className="w-7 h-7 rounded object-cover border border-gray-100" onError={e => { e.target.src = 'https://placehold.co/28x28?text=?'; }} />
                                            ))}
                                            {(product.images?.length || 0) > 3 && (
                                                <span className="text-xs text-gray-400 font-medium">+{product.images.length - 3}</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        {confirmDeleteId === product._id ? (
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-xs text-gray-500">Sure?</span>
                                                <button onClick={() => handleDelete(product._id)} className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold hover:bg-red-700 transition">Yes</button>
                                                <button onClick={() => setConfirmDeleteId(null)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold hover:bg-gray-300 transition">No</button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                <button onClick={() => openEdit(product)} className="text-indigo-500 hover:bg-indigo-50 p-1.5 rounded-lg transition" title="Edit">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => setConfirmDeleteId(product._id)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition" title="Delete">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageProductsPage;
