"use client";
import { useState } from "react";
import { Heart, ShoppingCart, Star, TrendingUp, Zap } from "lucide-react";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`${product.name} added to cart!`);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden w-44" // Reduced width
      onClick={() => window.location.href = `/products/${product.id}?data=${encodeURIComponent(JSON.stringify(product))}`}
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 text-xs"> {/* Smaller badges */}
        {discountPercentage && (
          <span className="text-white font-bold px-1 py-0.5 rounded-full shadow-sm bg-green-600">
            {discountPercentage}% OFF
          </span>
        )}
        {product.isTrending && (
          <span className="text-white font-bold px-1 py-0.5 rounded-full shadow-sm flex items-center gap-1 bg-orange-500">
            <TrendingUp size={10} />
            HOT
          </span>
        )}
        {product.isFastSelling && (
          <span className="bg-red-500 text-white font-bold px-1 py-0.5 rounded-full shadow-sm flex items-center gap-1">
            <Zap size={10} />
            FAST
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistClick}
        className={`absolute top-2 right-2 z-10 p-1 rounded-full transition-all duration-200 ${
          isWishlisted 
            ? 'text-white shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'
        }`}
        style={isWishlisted ? {backgroundColor: '#CB7F32'} : {}}
      >
        <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
      </button>

      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 rounded-t-lg overflow-hidden">
        <img 
          src={product.image || `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop`}
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* Product Info */}
      <div className="p-2 text-xs"> {/* Reduced padding and font size */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{product.name}</h3>

        <div className="flex items-center gap-1 mb-1">
          <Star size={12} fill="currentColor" className="text-yellow-400" />
          {product.rating && <span className="text-gray-700">{product.rating}</span>}
          {product.reviewCount && <span className="text-gray-500">({product.reviewCount})</span>}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 text-sm">₹{product.price.toLocaleString()}</span>
          <button
            onClick={handleAddToCart}
            className="text-white text-xs font-medium py-1 px-2 rounded transition-all duration-200 hover:scale-105"
            style={{backgroundColor: '#CB7F32'}}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
