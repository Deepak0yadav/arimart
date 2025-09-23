"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-lg shadow border hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden w-36"
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
        className={`absolute top-1 right-1 z-10 p-1 rounded-full transition-colors duration-200 ${
          isWishlisted
            ? "bg-red-500 text-white"
            : "bg-white/80 text-gray-600 hover:bg-white"
        }`}>
        <Heart
          size={12}
          fill={isWishlisted ? "currentColor" : "none"}
        />
      </button>

      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden rounded-t-lg">
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Product Info */}
      <div className="p-2 flex flex-col justify-between h-20">
        <h3 className="font-semibold text-gray-900 text-xs line-clamp-2 mb-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 text-sm">
            ₹{product.price.toLocaleString()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`${product.name} added to cart!`);
            }}
            className="bg-[#CB7F32] text-white text-xs font-medium py-1 px-2 rounded hover:bg-[#b36b2d] transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
