"use client";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";

export default function ProductActions({ product, quantity, setQuantity, isWishlisted, setIsWishlisted }) {
      const handleAddToCart = () => alert(`Added ${quantity} item(s) to cart!`);
      const handleWishlist = () => setIsWishlisted(!isWishlisted);

      return (
            <div className="space-y-3">
                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                        <span className="font-medium">Quantity:</span>
                        <div className="flex items-center border rounded-lg">
                              <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-2 hover:bg-gray-100 disabled:opacity-50"
                                    disabled={quantity <= 1}
                              >
                                    <Minus size={16} />
                              </button>
                              <span className="px-4 py-2 font-medium">{quantity}</span>
                              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                                    <Plus size={16} />
                              </button>
                        </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                        <button
                              onClick={handleAddToCart}
                              disabled={!product.inStock}
                              className="w-full text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:bg-gray-300"
                              style={product.inStock ? { backgroundColor: '#CB7F32' } : {}}
                        >
                              <ShoppingCart size={20} />
                              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>

                        {product.inStock && (
                              <button
                                    className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                                    style={{ backgroundColor: '#0A7E36' }}
                              >
                                    Buy Now
                              </button>
                        )}

                        <button
                              onClick={handleWishlist}
                              className={`w-full py-3 rounded-lg border font-medium flex items-center justify-center gap-2 ${isWishlisted ? 'bg-orange-50 text-orange-600 border-orange-200' : 'hover:bg-gray-50'
                                    }`}
                        >
                              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                              {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                        </button>
                  </div>
            </div>
      );
}
