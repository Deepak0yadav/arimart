"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="
        group relative bg-white rounded-xl shadow-sm border border-gray-100
        hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden
        h-full flex flex-col hover:-translate-y-1
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
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all duration-200 ${
          isWishlisted 
            ? "bg-red-500 text-white shadow-md" 
            : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500 shadow-sm"
        }`}>
        <Heart
          size={14}
          fill={isWishlisted ? "currentColor" : "none"}
          strokeWidth={isWishlisted ? 0 : 2}
        />
      </button>

      {/* Product Image */}
  <div className="relative h-28 sm:h-36 lg:h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-3 flex flex-col justify-between flex-1">
        <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2 mb-2 group-hover:text-gray-700 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-gray-800 text-sm md:text-base">
              ₹{product?.price ? product.price.toLocaleString() : '-'}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`${product.name} added to cart!`);
            }}
            aria-label={`Add ${product.name} to cart`}
            className="bg-green-600 text-white text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 rounded-lg hover:bg-green-700 hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
