"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="
        group relative bg-white rounded-md shadow-sm border 
        hover:shadow-md transition cursor-pointer overflow-hidden
        h-full flex flex-col
      "
      onClick={() =>
        (window.location.href = `/products/${
          product.id
        }?data=${encodeURIComponent(JSON.stringify(product))}`)
      }>
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
        className={`absolute top-1 right-1 z-10 p-1 rounded-full text-gray-600 transition-colors ${
          isWishlisted ? "bg-red-500 text-white" : "bg-white/80 hover:bg-white"
        }`}>
        <Heart
          size={12}
          fill={isWishlisted ? "currentColor" : "none"}
        />
      </button>

      {/* Product Image */}
      <div className="relative h-28 sm:h-32 lg:h-36 bg-gray-50 overflow-hidden flex-shrink-0">
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Product Info */}
      <div className="p-2 flex flex-col justify-between flex-1">
        <h3 className="font-medium text-gray-900 text-xs sm:text-sm line-clamp-2 mb-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-semibold text-gray-900 text-sm sm:text-base">
            ₹{product.price.toLocaleString()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`${product.name} added to cart!`);
            }}
            className="bg-[#CB7F32] text-white text-[10px] sm:text-xs font-medium py-1 px-2 sm:px-3 rounded hover:bg-[#b36b2d] transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
