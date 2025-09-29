"use client";
import CartItem from "@/components/cart/CartItem";
import MobileBackButton from "@/components/MobileBackButton";
import Navbar from "@/components/Navbar/Navbar";
import { CreditCard, Package, Shield, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const [tab, setTab] = useState("mycart");
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 120000,
      originalPrice: 139900,
      quantity: 1,
      variant: "128GB, Space Black",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "AirPods Pro",
      price: 25000,
      originalPrice: 27900,
      quantity: 2,
      variant: "2nd Generation",
      image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde4?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 95000,
      originalPrice: 114900,
      quantity: 1,
      variant: "13-inch, 256GB SSD, 8GB RAM",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&h=100&fit=crop"
    },
  ]);
  // Example group cart
  const [groupCart, setGroupCart] = useState([
    {
      id: 101,
      name: "Potato White 1kg",
      price: 38.25,
      originalPrice: 45.00,
      quantity: 2,
      variant: "1kg pack",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop"
    }
  ]);

  // Handlers
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const updateQuantity = (id, newQuantity) => setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  const removeFromGroupCart = (id) => setGroupCart(groupCart.filter((item) => item.id !== id));
  const updateGroupQuantity = (id, newQuantity) => setGroupCart(groupCart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  const moveToWishlist = (item) => alert(`${item.name} moved to wishlist!`);
  const handleCheckout = () => alert('Proceeding to checkout...');
  const handleContinueShopping = () => alert('Navigating to products...');

  // Totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
  const totalSavings = originalTotal - subtotal;
  const deliveryFee = subtotal >= 299 ? 0 : 40;
  const finalTotal = subtotal + deliveryFee;

  const groupSubtotal = groupCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const groupOriginalTotal = groupCart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
  const groupTotalSavings = groupOriginalTotal - groupSubtotal;
  const groupDeliveryFee = groupSubtotal >= 299 ? 0 : 40;
  const groupFinalTotal = groupSubtotal + groupDeliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 pt-32 md:pt-20">
        {/* Tabs */}
        <div className="flex gap-8 border-b mb-6">
          <button
            className={`pb-2 font-semibold text-lg border-b-2 transition-colors ${tab === "mycart" ? "border-green-600 text-green-700" : "border-transparent text-gray-600"}`}
            onClick={() => setTab("mycart")}
          >
            My Cart
          </button>
          <button
            className={`pb-2 font-semibold text-lg border-b-2 transition-colors ${tab === "groupcart" ? "border-green-600 text-green-700" : "border-transparent text-gray-600"}`}
            onClick={() => setTab("groupcart")}
          >
            Group Cart
          </button>
        </div>

        {/* Tab Content */}
        {tab === "mycart" ? (
          // ...existing my cart content...
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all duration-200"
              style={{ boxShadow: '0 2px 8px rgba(10,126,54,0.08)' }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border mb-4">
                <h2 className="text-lg font-semibold p-4 border-b border-gray-200" style={{color: '#CB7F32'}}>
                  Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                </h2>
                
                <div>
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={removeFromCart}
                      onUpdateQuantity={updateQuantity}
                      onWishlist={moveToWishlist}
                    />
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white rounded-lg shadow-sm border p-4 mt-4">
                <div className="flex items-center gap-3 mb-3">
                  <Truck size={18} style={{ color: '#0A7E36' }} />
                  <h3 className="font-medium">Delivery Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Package size={14} className="text-blue-500" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-gray-600 text-xs">On orders above ₹299</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck size={14} className="text-green-500" />
                    <div>
                      <p className="font-medium">Fast Shipping</p>
                      <p className="text-gray-600 text-xs">2-4 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-purple-500" />
                    <div>
                      <p className="font-medium">Easy Returns</p>
                      <p className="text-gray-600 text-xs">30-day return policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-24">
                <h3 className="text-lg font-medium mb-4" style={{color: '#CB7F32'}}>Price Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Price ({cart.length} {cart.length === 1 ? 'item' : 'items'}):</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount:</span>
                      <span>-₹{totalSavings.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      Delivery Charges
                      {deliveryFee === 0 && (
                        <span className="text-xs text-white px-1 py-0.5 rounded bg-green-600">FREE</span>
                      )}
                    </span>
                    <span className={deliveryFee === 0 ? 'text-green-600' : ''}>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-base">
                    <span>Total Amount:</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="text-green-600 text-sm font-medium">
                      You will save ₹{totalSavings.toLocaleString()} on this order
                    </div>
                  )}
                </div>

                {subtotal < 299 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-3 text-sm">
                    <p className="text-orange-800">
                      Add items worth ₹{(299 - subtotal).toLocaleString()} more to get free delivery!
                    </p>
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  className="w-full text-white font-medium py-3 px-6 rounded-lg mt-4 transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#0A7E36' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(10,126,54,0.9)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#0A7E36';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <CreditCard size={16} /> PLACE ORDER
                </button>

                <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield size={12} /> Secure
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck size={12} /> Fast Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
