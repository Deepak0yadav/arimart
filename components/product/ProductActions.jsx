"use client";
import { Heart, ShoppingCart, Plus, Minus, Star } from "lucide-react";

export default function ProductActions({
  product,
  quantity,
  setQuantity,
  isWishlisted,
  setIsWishlisted,
}) {
  const handleAddToCart = () => alert(`Added ${quantity} item(s) to cart!`);
  const handleWishlist = () => setIsWishlisted(!isWishlisted);

  return (
    <div className="md:w-1/2 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-sm">
            <span>{product.rating}</span>
            <Star
              size={12}
              fill="currentColor"
            />
          </div>
          <span className="text-gray-600 text-sm">
            ({product.reviewCount || 0} reviews)
          </span>
        </div>
      )}

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">
          ₹{product.price}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">{product.description}</p>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-gray-900">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quantity */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-medium text-gray-900">Quantity:</span>
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 hover:bg-gray-100 disabled:opacity-50"
            disabled={quantity <= 1}>
            <Minus size={16} />
          </button>
          <span className="px-4 py-2 font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 hover:bg-gray-100">
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
          <ShoppingCart size={18} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        {product.inStock && (
          <button
            onClick={handleWishlist}
            className={`w-full py-3 px-6 rounded-lg border font-medium flex items-center justify-center gap-2 transition-colors ${
              isWishlisted
                ? "bg-red-50 text-red-600 border-red-200"
                : "hover:bg-gray-50 border-gray-300"
            }`}>
            <Heart
              size={18}
              fill={isWishlisted ? "currentColor" : "none"}
            />
            {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
          </button>
        )}
      </div>
    </div>
  );
}
