"use client";
import { Star } from "lucide-react";

export default function ProductTabs({ product, activeTab, setActiveTab }) {
      const tabs = ['description', 'specifications', 'reviews'];

      return (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="border-b">
                        <div className="flex gap-8 px-6">
                              {tabs.map(tab => (
                                    <button
                                          key={tab}
                                          onClick={() => setActiveTab(tab)}
                                          className={`py-4 px-2 font-medium capitalize transition-colors relative ${activeTab === tab ? 'border-b-2' : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                          style={activeTab === tab ? { color: '#CB7F32', borderBottomColor: '#CB7F32' } : {}}
                                    >
                                          {tab}
                                    </button>
                              ))}
                        </div>
                  </div>

                  <div className="p-6">
                        {activeTab === 'description' && (
                              <div className="space-y-6">
                                    <p>{product.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                          {product.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#CB7F32' }}></span>
                                                      {f}
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                        )}

                        {activeTab === 'specifications' && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                          <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                                                <span className="font-medium text-gray-600 capitalize">{key}:</span>
                                                <span className="text-gray-900">{value}</span>
                                          </div>
                                    ))}
                              </div>
                        )}

                        {activeTab === 'reviews' && (
                              <div className="space-y-4">
                                    {product.reviews.map((review, i) => (
                                          <div key={i} className="border-b border-gray-100 pb-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                      <span className="font-medium">{review.name}</span>
                                                      <div className="flex">
                                                            {[...Array(5)].map((_, j) => (
                                                                  <Star key={j} size={14} className={j < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} />
                                                            ))}
                                                      </div>
                                                </div>
                                                <p className="text-gray-700">{review.comment}</p>
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>
            </div>
      );
}
