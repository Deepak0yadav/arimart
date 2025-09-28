import React from 'react';
import { Trash2, Heart, X } from "lucide-react";

const ActionButtons = ({ 
  onRemove, 
  onMoveToWishlist, 
  onQuickRemove,
  isRemoving = false,
  layout = 'horizontal' // horizontal | vertical | quick-only
}) => {
  const handleMoveToWishlist = () => {
    if (onMoveToWishlist) onMoveToWishlist();
  };

  // Quick remove button only (for top-right corner)
  if (layout === 'quick-only') {
    return (
      <button
        onClick={onQuickRemove}
        className="p-2 text-gray-400 hover:text-red-500 transition-all duration-200 absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg z-10 hover:scale-110"
        disabled={isRemoving}
        aria-label="Remove item"
      >
        <X size={16} strokeWidth={2} />
      </button>
    );
  }

  const containerClass = layout === 'vertical' 
    ? "flex flex-col gap-2 mt-2"
    : "flex items-center gap-4 mt-2";

  const buttonClass = "flex items-center gap-2 text-sm transition-all duration-200 font-medium";

  return (
    <div className={containerClass}>
      <button
        onClick={onRemove}
        className={`${buttonClass} text-gray-600 hover:text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-red-200`}
        disabled={isRemoving}
      >
        <Trash2 size={14} />
        <span>Remove</span>
      </button>
      
      {onMoveToWishlist && (
        <button
          onClick={handleMoveToWishlist}
          className={`${buttonClass} hover:bg-orange-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-orange-200`}
          style={{color: '#CB7F32'}}
        >
          <Heart size={12} />
          <span>Save for Later</span>
        </button>
      )}
    </div>
  );
};

export default ActionButtons;