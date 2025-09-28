"use client";
import { Star } from "lucide-react";

export default function ProductTabs({ product, activeTab, setActiveTab }) {
  const tabs = ['description', 'specifications', 'reviews'];

  // Default data for missing fields
  const specifications = product.specifications || {
    "brand": product.name.split(' ')[0] || "Generic",
    "category": "Product",
    "availability": product.inStock ? "In Stock" : "Out of Stock"
  };

  const reviews = product.reviews || [
    {
      name: "Customer",
      rating: 4,
      comment: "Good product, satisfied with the purchase."
    }
  ];

  const rating = product.rating || 4.0;
  const reviewCount = product.reviewCount || reviews.length;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="border-b">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 px-4 font-medium capitalize transition-colors ${
                activeTab === tab 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'description' && (
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">About this product</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            {product.features && product.features.length > 0 && (
              <div className="space-y-2">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'specifications' && (
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Specifications</h3>
            <div className="space-y-3">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-600 capitalize">{key}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-semibold text-gray-900">Customer Reviews</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">({reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {reviews.map((review, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{review.name}</span>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={12} className={j < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
