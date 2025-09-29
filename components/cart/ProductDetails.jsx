import React from 'react';

const ProductDetails = ({ item }) => {
  const { name, variant, price, originalPrice } = item;

  return (
    <div className="flex-1 min-w-0">
      {/* Product Title */}
      <h3 className="font-normal text-gray-900 text-sm line-clamp-2 leading-normal mb-1">
        {name}
      </h3>

      {/* Variant and other details */}
      <div className="space-y-1">
        {variant && (
          <p className="text-xs text-gray-600">
            {variant}
          </p>
        )}
        
        <p className="text-xs text-gray-600">
          Seller: Arimart
        </p>
        
        {/* Unit price display */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold text-base text-black">
            ₹{price.toLocaleString()}
          </span>
          
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
          
          {originalPrice && originalPrice > price && (
            <span className="text-sm font-medium" style={{color: '#0A7E36'}}>
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;