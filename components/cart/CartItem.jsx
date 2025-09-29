"use client";
import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import QuantityControls from "./QuantityControls";
import ActionButtons from "./ActionButtons";

// Enhanced CartItem Component - Flipkart inspired with modular structure
function CartItem({ item, onRemove, onUpdateQuantity, onWishlist }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(item.id);
    }, 300);
  };

  const handleQuantityUpdate = (newQuantity) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleMoveToWishlist = () => {
    onWishlist(item);
    onRemove(item.id);
  };

  return (
    <div className={`
      bg-white border-b border-gray-200 
      transition-all duration-300 relative
      ${isRemoving ? 'opacity-50 scale-95 pointer-events-none' : ''} 
      max-w-none mx-0
    `}>
      {/* Quick Remove Button */}
      <ActionButtons 
        layout="quick-only"
        onQuickRemove={handleRemove}
        isRemoving={isRemoving}
      />
      
      <div className="p-4 pr-12">
        <div className="flex gap-4">
          {/* Product Image - Flipkart style */}
          <div className="flex-shrink-0">
            <ProductImage 
              image={item.image}
              name={item.name}
              className="w-20 h-20"
            />
          </div>

          {/* Product Details Section */}
          <div className="flex-1 min-w-0">
            <ProductDetails item={item} />
            
            {/* Quantity and Price Row */}
            <div className="flex items-center justify-between mt-4">
              {/* Quantity Controls */}
              <div className="flex items-center">
                <QuantityControls 
                  quantity={item.quantity}
                  onQuantityChange={handleQuantityUpdate}
                  disabled={isRemoving}
                  compact={true}
                />
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-3">
              <ActionButtons 
                onRemove={handleRemove}
                onMoveToWishlist={handleMoveToWishlist}
                isRemoving={isRemoving}
                layout="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem