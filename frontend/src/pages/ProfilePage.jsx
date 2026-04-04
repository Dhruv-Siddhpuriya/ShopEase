import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { 
    User, Package, MapPin, CreditCard, Settings, LogOut, ChevronRight, 
    CheckCircle, Clock, Shield, Plus, Edit2, Trash2, Heart, Tag, X, Save,
    Eye, EyeOff, ArrowLeft
} from 'lucide-react';

// ─── Reusable Modal ──────────────────────────────────────────────────────────
const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};

// ─── ProfilePage ─────────────────────────────────────────────────────────────
const ProfilePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get('tab') || 'dashboard';
    const [activeTab, setActiveTab] = useState(initialTab);
    const { user, logout, setUser } = useContext(AuthContext);

    useEffect(() => {
        if (queryParams.get('tab')) setActiveTab(queryParams.get('tab'));
    }, [location.search]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/profile?tab=${tabId}`);
    };

    const logoutHandler = () => { logout(); navigate('/login'); };

    const tabs = [
        { id: 'dashboard', name: 'Dashboard', icon: User },
        { id: 'orders', name: 'Your Orders', icon: Package },
        { id: 'addresses', name: 'Your Addresses', icon: MapPin },
        { id: 'payments', name: 'Payment Options', icon: CreditCard },
        { id: 'settings', name: 'Account Settings', icon: Settings },
    ];

    if (!user) return null;

    return (
        <div className="max-w-7xl mx-auto py-8">
            {/* Back to Home */}
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-[#FF9900] font-medium mb-6 transition group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Continue Shopping
            </button>

            <h1 className="text-3xl font-extrabold text-[#131921] tracking-tight mb-8">Your Account</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full lg:w-1/4 flex-shrink-0">
                    <div className="bg-[#131921] rounded-2xl p-6 mb-6 text-white text-center shadow-lg relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF9900] opacity-20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#FF9900] opacity-10 rounded-full blur-xl"></div>
                        <div className="h-24 w-24 rounded-full bg-white text-[#131921] flex items-center justify-center text-4xl font-extrabold mx-auto mb-4 shadow-inner relative z-10">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <h2 className="text-xl font-bold truncate relative z-10">{user.name}</h2>
                        <p className="text-gray-300 text-sm truncate mb-4 relative z-10">{user.email}</p>
                        <div className="inline-flex items-center bg-[#FF9900] text-[#131921] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md hover:bg-yellow-400 transition cursor-pointer">
                            <Shield className="w-3 h-3 mr-1.5" /> ShopEase Prime Member
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sticky top-24">
                        <nav className="space-y-1">
                            {tabs.map(tab => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button key={tab.id} onClick={() => handleTabChange(tab.id)}
                                        className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 ${isActive ? 'bg-[#131921] text-white font-semibold shadow-md translate-x-1' : 'text-gray-600 hover:bg-gray-50 hover:text-[#131921]'}`}
                                    >
                                        <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-[#FF9900]' : 'text-gray-400'}`} />
                                        {tab.name}
                                        {isActive && <ChevronRight className="w-4 h-4 ml-auto text-[#FF9900]" />}
                                    </button>
                                );
                            })}
                            <hr className="my-2 border-gray-100" />
                            <button onClick={logoutHandler} className="w-full flex items-center px-4 py-3 text-left rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 transition font-medium">
                                <LogOut className="w-5 h-5 mr-3 text-red-500" /> Sign Out
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 min-h-[600px]">
                        {activeTab === 'dashboard' && <DashboardTab setActiveTab={handleTabChange} />}
                        {activeTab === 'orders' && <OrdersTab />}
                        {activeTab === 'addresses' && <AddressesTab />}
                        {activeTab === 'payments' && <PaymentsTab />}
                        {activeTab === 'settings' && <SettingsTab user={user} setUser={setUser} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Dashboard Tab ───────────────────────────────────────────────────────────
const DashboardTab = ({ setActiveTab }) => {
    const cards = [
        { title: 'Your Orders', desc: 'Track, return, or buy things again', icon: Package, tab: 'orders', color: 'bg-blue-50 text-blue-600' },
        { title: 'Login & Security', desc: 'Edit login, name, and mobile number', icon: Shield, tab: 'settings', color: 'bg-green-50 text-green-600' },
        { title: 'Your Addresses', desc: 'Edit addresses for orders and gifts', icon: MapPin, tab: 'addresses', color: 'bg-purple-50 text-purple-600' },
        { title: 'Payment Options', desc: 'Edit or add payment methods', icon: CreditCard, tab: 'payments', color: 'bg-amber-50 text-[#FF9900]' },
        { title: 'Your Wishlist', desc: 'View items you saved for later', icon: Heart, tab: null, color: 'bg-rose-50 text-rose-600' },
        { title: 'Coupons & Rewards', desc: 'Your exclusive prime offers', icon: Tag, tab: null, color: 'bg-indigo-50 text-indigo-600' },
    ];
    return (
        <div>
            <h2 className="text-2xl font-bold text-[#131921] mb-6">Account Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div key={index} onClick={() => card.tab && setActiveTab(card.tab)}
                            className={`border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center transition-all group ${card.tab ? 'cursor-pointer hover:shadow-lg hover:border-[#131921]' : 'opacity-70 cursor-not-allowed'}`}>
                            <div className={`p-4 rounded-full mb-4 transition-transform group-hover:scale-110 ${card.color}`}>
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-[#131921] mb-1">{card.title}</h3>
                            <p className="text-sm text-gray-500">{card.desc}</p>
                            {!card.tab && <span className="mt-3 text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full uppercase font-bold tracking-wider">Coming Soon</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// ─── Orders Tab ──────────────────────────────────────────────────────────────
const OrdersTab = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await api.get('/orders/myorders');
                setOrders(data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally { setLoading(false); }
        };
        fetchOrders();
    }, []);

    if (loading) return <div className="py-20 flex justify-center"><Loader /></div>;
    if (error) return <Message variant="danger">{error}</Message>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#131921]">Your Orders</h2>
                <span className="text-sm font-medium text-gray-500">{orders.length} orders placed</span>
            </div>
            {orders.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No orders found</h3>
                    <p className="text-gray-500 mb-6">Looks like you haven't placed an order yet.</p>
                    <Link to="/" className="bg-[#FF9900] text-[#131921] px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow">Start Shopping</Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order._id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition">
                            <div className="bg-gray-50 px-6 py-4 flex flex-wrap gap-6 justify-between items-center border-b border-gray-200 text-sm">
                                <div>
                                    <p className="text-gray-500 uppercase font-semibold text-xs mb-1">Order Placed</p>
                                    <p className="font-medium text-gray-900">{new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 uppercase font-semibold text-xs mb-1">Total</p>
                                    <p className="font-bold text-gray-900">₹{order.totalAmount.toLocaleString('en-IN')}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 uppercase font-semibold text-xs mb-1">Order #</p>
                                    <p className="font-medium text-gray-900 font-mono text-xs">{order._id}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-4 flex items-center">
                                    {order.status === 'Delivered'
                                        ? <><CheckCircle className="w-5 h-5 text-green-600 mr-2" /> Delivered</>
                                        : <><Clock className="w-5 h-5 text-[#FF9900] mr-2" /> {order.status}</>}
                                </h3>
                                <p className="text-gray-600">{order.items?.length || 'Multiple'} item(s) in this order.</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// ─── Addresses Tab ───────────────────────────────────────────────────────────
const AddressesTab = () => {
    const [addresses, setAddresses] = useState([
        { id: 1, name: 'John Doe', default: true, street: '123 Main Street, Apt 4B', city: 'Metropolis', state: 'NY', zip: '10001', country: 'United States', phone: '+1 555-0198' },
        { id: 2, name: 'John Doe (Work)', default: false, street: 'Tech Corp, 999 Silicon Ave', city: 'San Francisco', state: 'CA', zip: '94107', country: 'United States', phone: '+1 555-8832' }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editAddr, setEditAddr] = useState(null);
    const [form, setForm] = useState({ name: '', street: '', city: '', state: '', zip: '', country: '', phone: '' });

    const openAdd = () => { setEditAddr(null); setForm({ name: '', street: '', city: '', state: '', zip: '', country: '', phone: '' }); setShowModal(true); };
    const openEdit = (addr) => { setEditAddr(addr); setForm({ name: addr.name, street: addr.street, city: addr.city, state: addr.state, zip: addr.zip, country: addr.country, phone: addr.phone }); setShowModal(true); };
    const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

    const handleSave = (e) => {
        e.preventDefault();
        if (editAddr) {
            setAddresses(prev => prev.map(a => a.id === editAddr.id ? { ...a, ...form } : a));
        } else {
            setAddresses(prev => [...prev, { id: Date.now(), ...form, default: false }]);
        }
        setShowModal(false);
    };

    const [confirmRemoveId, setConfirmRemoveId] = useState(null);
    const handleRemove = (id) => { setAddresses(prev => prev.filter(a => a.id !== id)); setConfirmRemoveId(null); };
    const handleSetDefault = (id) => setAddresses(prev => prev.map(a => ({ ...a, default: a.id === id })));

    return (
        <div>
            <Modal show={showModal} onClose={() => setShowModal(false)} title={editAddr ? 'Edit Address' : 'Add New Address'}>
                <form onSubmit={handleSave} className="space-y-4">
                    {[['name','Full Name'],['street','Street Address'],['city','City'],['state','State'],['zip','ZIP Code'],['country','Country'],['phone','Phone Number']].map(([field, label]) => (
                        <div key={field}>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                            <input name={field} value={form[field]} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                        </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-gray-200 text-gray-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">Cancel</button>
                        <button type="submit" className="flex-1 bg-[#131921] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition">Save Address</button>
                    </div>
                </form>
            </Modal>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#131921]">Your Addresses</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div onClick={openAdd} className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition min-h-[250px] group">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-400 group-hover:bg-[#FF9900] group-hover:text-white transition-colors">
                        <Plus className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700">Add New Address</h3>
                </div>
                {addresses.map(addr => (
                    <div key={addr.id} className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition bg-white min-h-[250px] relative overflow-hidden">
                        {addr.default && <div className="absolute top-0 right-0 bg-[#FF9900] text-[#131921] text-xs font-bold px-3 py-1 rounded-bl-xl shadow-sm">Default</div>}
                        <div>
                            <h3 className="font-bold text-lg text-[#131921] mb-2">{addr.name}</h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <p>{addr.street}</p>
                                <p>{addr.city}, {addr.state} {addr.zip}</p>
                                <p>{addr.country}</p>
                                <p className="mt-2 text-gray-500">Phone: {addr.phone}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                            <button onClick={() => openEdit(addr)} className="text-sm font-semibold text-[#007185] hover:text-[#C40000] hover:underline flex items-center">
                                <Edit2 className="w-3 h-3 mr-1" /> Edit
                            </button>
                            <span className="text-gray-300">|</span>
                            {confirmRemoveId === addr.id ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">Sure?</span>
                                    <button onClick={() => handleRemove(addr.id)} className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded transition">Yes</button>
                                    <button onClick={() => setConfirmRemoveId(null)} className="text-xs font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded transition">No</button>
                                </div>
                            ) : (
                                <button onClick={() => setConfirmRemoveId(addr.id)} className="text-sm font-semibold text-[#007185] hover:text-[#C40000] hover:underline flex items-center">
                                    <Trash2 className="w-3 h-3 mr-1" /> Remove
                                </button>
                            )}
                            {!addr.default && (
                                <>
                                    <span className="text-gray-300">|</span>
                                    <button onClick={() => handleSetDefault(addr.id)} className="text-sm font-semibold text-[#007185] hover:text-[#C40000] hover:underline">Set as Default</button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ─── Payments Tab ────────────────────────────────────────────────────────────
const PaymentsTab = () => {
    const [cards, setCards] = useState([
        { id: 1, type: 'Visa', last4: '4242', default: true, expiry: '12/28', name: 'John Doe', color: 'bg-gradient-to-r from-blue-700 to-blue-900' },
        { id: 2, type: 'Mastercard', last4: '8839', default: false, expiry: '05/27', name: 'John Doe', color: 'bg-gradient-to-r from-orange-500 to-red-600' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editCard, setEditCard] = useState(null);
    const [form, setForm] = useState({ type: 'Visa', last4: '', expiry: '', name: '' });
    const [successMsg, setSuccessMsg] = useState('');

    const CARD_TYPES = [
        { value: 'Visa', color: 'bg-gradient-to-r from-blue-700 to-blue-900' },
        { value: 'Mastercard', color: 'bg-gradient-to-r from-orange-500 to-red-600' },
        { value: 'Amex', color: 'bg-gradient-to-r from-green-600 to-teal-700' },
        { value: 'RuPay', color: 'bg-gradient-to-r from-purple-600 to-indigo-700' },
    ];

    const showSuccess = (msg) => { setSuccessMsg(msg); setTimeout(() => setSuccessMsg(''), 3000); };

    const openAdd = () => { setEditCard(null); setForm({ type: 'Visa', last4: '', expiry: '', name: '' }); setShowModal(true); };
    const openEdit = (card) => { setEditCard(card); setForm({ type: card.type, last4: card.last4, expiry: card.expiry, name: card.name }); setShowModal(true); };
    const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

    const handleSave = (e) => {
        e.preventDefault();
        const colorObj = CARD_TYPES.find(c => c.value === form.type);
        if (editCard) {
            setCards(prev => prev.map(c => c.id === editCard.id ? { ...c, ...form, color: colorObj?.color || c.color } : c));
            showSuccess('Card updated successfully!');
        } else {
            if (!form.last4 || form.last4.length !== 4) return alert('Please enter a valid 4-digit card number.');
            setCards(prev => [...prev, { id: Date.now(), ...form, default: prev.length === 0, color: colorObj?.color || 'bg-gradient-to-r from-gray-700 to-gray-900' }]);
            showSuccess('Card added successfully!');
        }
        setShowModal(false);
    };

    const [confirmRemoveId, setConfirmRemoveId] = useState(null);

    const handleRemove = (id) => {
        setCards(prev => prev.filter(c => c.id !== id));
        setConfirmRemoveId(null);
        showSuccess('Card removed.');
    };
    const handleSetDefault = (id) => { setCards(prev => prev.map(c => ({ ...c, default: c.id === id }))); showSuccess('Default payment updated!'); };

    return (
        <div>
            <Modal show={showModal} onClose={() => setShowModal(false)} title={editCard ? 'Edit Payment Method' : 'Add New Card'}>
                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Card Type</label>
                        <select name="type" value={form.type} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white">
                            {CARD_TYPES.map(c => <option key={c.value} value={c.value}>{c.value}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Last 4 Digits *</label>
                        <input name="last4" value={form.last4} onChange={handleChange} maxLength={4} placeholder="e.g. 4242" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Expiry (MM/YY) *</label>
                            <input name="expiry" value={form.expiry} onChange={handleChange} placeholder="12/28" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Cardholder Name *</label>
                            <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                        </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-gray-200 text-gray-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">Cancel</button>
                        <button type="submit" className="flex-1 bg-[#131921] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition flex items-center justify-center gap-2">
                            <Save className="w-4 h-4" /> {editCard ? 'Save Changes' : 'Add Card'}
                        </button>
                    </div>
                </form>
            </Modal>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#131921]">Your Payment Methods</h2>
            </div>

            {successMsg && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> {successMsg}
                </div>
            )}

            <div className="space-y-6">
                {cards.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <CreditCard className="w-14 h-14 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium">No payment methods added yet</p>
                    </div>
                )}
                {cards.map(card => (
                    <div key={card.id} className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition bg-white">
                        <div className={`w-48 h-28 ${card.color} rounded-xl shadow-inner p-4 text-white flex flex-col justify-between relative overflow-hidden flex-shrink-0`}>
                            <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                            <div className="font-bold tracking-widest text-lg opacity-90">{card.type}</div>
                            <div>
                                <div className="font-mono tracking-widest text-lg mb-1">•••• {card.last4}</div>
                                <div className="text-xs opacity-80 uppercase flex justify-between">
                                    <span>{card.name}</span>
                                    <span>{card.expiry}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{card.type} ending in {card.last4}</h3>
                            <p className="text-gray-500 text-sm mb-3">Expires {card.expiry} · {card.name}</p>
                            {card.default && <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Default Payment Method</span>}
                        </div>
                        <div className="flex flex-col gap-2 min-w-[100px]">
                            <button onClick={() => openEdit(card)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm transition flex items-center justify-center gap-1">
                                <Edit2 className="w-3.5 h-3.5" /> Edit
                            </button>
                            {!card.default && (
                                <button onClick={() => handleSetDefault(card.id)} className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm transition">
                                    Set Default
                                </button>
                            )}
                            {confirmRemoveId === card.id ? (
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-gray-500 text-center">Sure?</span>
                                    <button
                                        onClick={() => handleRemove(card.id)}
                                        className="bg-red-600 text-white px-4 py-1.5 rounded-lg font-bold text-xs transition hover:bg-red-700"
                                    >Yes, Remove</button>
                                    <button
                                        onClick={() => setConfirmRemoveId(null)}
                                        className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-lg font-semibold text-xs transition hover:bg-gray-300"
                                    >Cancel</button>
                                </div>
                            ) : (
                                <button onClick={() => setConfirmRemoveId(card.id)} className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold text-sm transition flex items-center justify-center gap-1">
                                    <Trash2 className="w-3.5 h-3.5" /> Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
                <button onClick={openAdd} className="flex items-center text-[#131921] font-bold text-lg hover:text-[#FF9900] transition group">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-[#FF9900] group-hover:text-white transition">
                        <Plus className="w-5 h-5" />
                    </div>
                    Add a New Payment Method
                </button>
            </div>
        </div>
    );
};

// ─── Settings Tab ─────────────────────────────────────────────────────────────
const SettingsTab = ({ user, setUser }) => {
    const [editField, setEditField] = useState(null); // 'name' | 'email' | 'phone' | 'password'
    const [formData, setFormData] = useState({ name: user?.name || '', email: user?.email || '', phone: '', currentPassword: '', newPassword: '', confirmPassword: '' });
    const [saving, setSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const showSuccess = (msg) => { setSuccessMsg(msg); setErrorMsg(''); setTimeout(() => setSuccessMsg(''), 4000); };
    const showError = (msg) => { setErrorMsg(msg); setSuccessMsg(''); };

    const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

    const openEdit = (field) => {
        setErrorMsg('');
        setSuccessMsg('');
        setEditField(field);
        if (field === 'name') setFormData(p => ({ ...p, name: user.name }));
        if (field === 'email') setFormData(p => ({ ...p, email: user.email }));
        if (field === 'password') setFormData(p => ({ ...p, currentPassword: '', newPassword: '', confirmPassword: '' }));
    };

    const cancelEdit = () => { setEditField(null); setErrorMsg(''); };

    const saveField = async (field) => {
        setSaving(true);
        setErrorMsg('');
        try {
            let payload = {};
            if (field === 'name') {
                if (!formData.name.trim()) return showError('Name cannot be empty.');
                payload = { name: formData.name };
            } else if (field === 'email') {
                if (!formData.email.trim()) return showError('Email cannot be empty.');
                payload = { email: formData.email };
            } else if (field === 'password') {
                if (!formData.newPassword) return showError('New password cannot be empty.');
                if (formData.newPassword.length < 6) return showError('Password must be at least 6 characters.');
                if (formData.newPassword !== formData.confirmPassword) return showError('Passwords do not match.');
                payload = { password: formData.newPassword };
            } else if (field === 'phone') {
                payload = { phone: formData.phone };
            }

            const { data } = await api.put('/users/profile', payload);
            // Update local storage + context
            const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
            const updated = { ...userInfo, ...data };
            localStorage.setItem('userInfo', JSON.stringify(updated));
            if (setUser) setUser(updated);
            setEditField(null);
            showSuccess(`${field === 'name' ? 'Name' : field === 'email' ? 'Email' : field === 'password' ? 'Password' : 'Phone'} updated successfully!`);
        } catch (err) {
            showError(err.response?.data?.message || err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteAccount = () => {
        if (window.confirm('Are you sure you want to permanently delete your account? This action CANNOT be undone.')) {
            alert('Account deletion is disabled in demo mode.');
        }
    };

    const FieldRow = ({ label, value, fieldKey, children }) => (
        <div className="py-4 border-b border-gray-100 last:border-0">
            {editField === fieldKey ? (
                <div>
                    <p className="font-semibold text-gray-900 text-sm mb-3">{label}</p>
                    {children}
                    {errorMsg && editField === fieldKey && (
                        <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
                    )}
                    <div className="flex gap-2 mt-3">
                        <button onClick={() => saveField(fieldKey)} disabled={saving} className="bg-[#131921] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition disabled:opacity-60 flex items-center gap-1">
                            <Save className="w-3.5 h-3.5" /> {saving ? 'Saving...' : 'Save'}
                        </button>
                        <button onClick={cancelEdit} className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-gray-900 text-sm">{label}</p>
                        <p className="text-gray-600 mt-0.5">{value}</p>
                    </div>
                    <button onClick={() => openEdit(fieldKey)} className="text-[#007185] hover:text-[#C40000] font-semibold text-sm transition">
                        {value === 'Not provided' ? 'Add' : 'Edit'}
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#131921] mb-6">Account Settings</h2>

            {successMsg && (
                <div className="mb-5 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> {successMsg}
                </div>
            )}

            <div className="space-y-8">
                {/* Personal Information */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 pb-2 border-b">Personal Information</h3>
                    <FieldRow label="Name" value={user.name} fieldKey="name">
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                    </FieldRow>
                    <FieldRow label="Email" value={user.email} fieldKey="email">
                        <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                    </FieldRow>
                    <FieldRow label="Mobile Phone Number" value="Not provided" fieldKey="phone">
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                    </FieldRow>
                </div>

                {/* Security */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 pb-2 border-b">Security</h3>
                    <FieldRow label="Password" value="••••••••••••" fieldKey="password">
                        <div className="space-y-3">
                            <div className="relative">
                                <input name="newPassword" type={showPwd ? 'text' : 'password'} value={formData.newPassword} onChange={handleChange} placeholder="New password (min. 6 chars)" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 pr-10" />
                                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <input name="confirmPassword" type={showPwd ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm new password" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                        </div>
                    </FieldRow>
                </div>

                {/* Danger Zone */}
                <div className="pt-4">
                    <h3 className="text-lg font-bold text-red-600 mb-4 pb-2 border-b border-red-100">Danger Zone</h3>
                    <button onClick={handleDeleteAccount} className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-red-700 transition flex items-center">
                        <Trash2 className="w-5 h-5 mr-2" /> Delete Account Permanently
                    </button>
                    <p className="mt-2 text-xs text-gray-500">This action is irreversible. All your data will be lost.</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
