import React from 'react';

const ProductImage = ({ image, name, className = "" }) => {
  return (
    <div className={`flex-shrink-0 relative overflow-hidden ${className}`}>
      <img
        src={image || `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop`}
        alt={name}
        className="w-full h-full object-cover rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
        loading="lazy"
      />
      {/* Image overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
    </div>
  );
};

export default ProductImage;