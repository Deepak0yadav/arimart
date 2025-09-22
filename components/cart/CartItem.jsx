"use client";
import { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2, Heart, ArrowLeft, Package, Truck, Shield, Tag, CreditCard, X } from "lucide-react";

// Enhanced CartItem Component
function CartItem({ item, onRemove, onUpdateQuantity, onWishlist }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(item.id);
    }, 300);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, item.quantity + change);
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleMoveToWishlist = () => {
    onWishlist(item);
    onRemove(item.id);
  };

  return (
    <div className={`bg-white border rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${isRemoving ? 'opacity-50 scale-95' : 'hover:shadow-md'}`}>
      <div className="p-6">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={item.image || `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop`}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg bg-gray-100"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900 truncate pr-2">{item.name}</h3>
              <button
                onClick={handleRemove}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                disabled={isRemoving}
              >
                <X size={16} />
              </button>
            </div>

            {item.variant && (
              <p className="text-sm text-gray-500 mb-2">{item.variant}</p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold" style={{color: '#CB7F32'}}>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
                {item.originalPrice && item.originalPrice > item.price && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-white px-1 py-0.5 rounded" style={{backgroundColor: '#0A7E36'}}>
                      {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 py-2 font-medium min-w-[2.5rem] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 mt-1">
              ₹{item.price.toLocaleString()} each
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={handleRemove}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 transition-colors"
                disabled={isRemoving}
              >
                <Trash2 size={14} />
                Remove
              </button>
              <button
                onClick={handleMoveToWishlist}
                className="flex items-center gap-1 text-sm hover:underline transition-colors"
                style={{color: '#CB7F32'}}
              >
                <Heart size={14} />
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem