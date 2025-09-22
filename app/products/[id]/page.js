"use client";
import { useState } from "react";
import { Heart, Share2, ShoppingCart, Star, Truck, Shield, ArrowLeft, Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function ProductDetails({ params }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showAllOffers, setShowAllOffers] = useState(false);

  const { id } = params || {};

  // Enhanced dummy product with multiple images
  const dummyProduct = {
    id: id || "001",
    name: "Vietnamese Cold Coffee",
    images: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=600&fit=crop"
    ],
    description: "Rich Vietnamese-style cold coffee made from premium beans, blended to perfection with milk and ice for a smooth, refreshing taste. Our signature blend combines traditional Vietnamese coffee culture with modern brewing techniques.",
    price: 189,
    mrp: 529,
    discount: "64% Off",
    rating: 4.4,
    reviewsCount: "104k",
    quantity: "450 ml",
    brand: "Cafe Delight",
    category: "Beverages",
    seller: "FreshMart Online",
    inStock: true,
    stockCount: 47,
    delivery: {
      estimated: "Delivery by Sep 22 - Sep 24",
      returnPolicy: "7 Days Return & Refund Policy",
      freeDelivery: "Free delivery on orders above ₹299"
    },
    offers: [
      "Get flat 40% off up to Rs.100 free cash",
      "Assured Cashback From CRED",
      "Get Upto ₹100 Cashback on using Amazon Pay Later",
      "Assured ₹10 - ₹300 Cashback on using Paytm UPI",
      "Get Up to ₹300 cashback on Using POP UPI",
      "Extra 5% off with membership",
      "Buy 2 Get 1 Free on selected items"
    ],
    specifications: {
      flavor: "Coffee",
      weight: "450 ml",
      containerType: "Glass Bottle",
      shelfLife: "12 months",
      countryOfOrigin: "Vietnam",
      caffeine: "95mg per serving",
      calories: "45 per 100ml"
    },
    features: [
      "Premium Vietnamese coffee beans",
      "No artificial preservatives",
      "Rich and smooth texture",
      "Perfect for any time of day"
    ],
    reviews: [
      { name: "Rahul K.", rating: 5, comment: "Amazing taste! Authentic Vietnamese flavor." },
      { name: "Priya M.", rating: 4, comment: "Good quality, fast delivery. Will order again." },
      { name: "John D.", rating: 5, comment: "Perfect cold coffee for hot summers." }
    ]
  };

  const finalProduct = dummyProduct;

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: finalProduct.name,
        text: finalProduct.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft size={20} />
            Back to Products
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full border ${isWishlisted ? 'bg-orange-50 text-orange-600 border-orange-200' : 'hover:bg-gray-50'}`}
              style={isWishlisted ? {backgroundColor: 'rgba(203, 127, 50, 0.1)', color: '#CB7F32', borderColor: 'rgba(203, 127, 50, 0.3)'} : {}}
            >
              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full border hover:bg-gray-50"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE: IMAGE GALLERY */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={finalProduct.images[selectedImageIndex]}
                alt={finalProduct.name}
                className="w-full h-[500px] object-cover"
              />
              {!finalProduct.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Out of Stock</span>
                </div>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
                          <div className="flex gap-3 overflow-x-auto pb-2">
              {finalProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-orange-600' : 'border-gray-200'
                  }`}
                  style={selectedImageIndex === index ? {borderColor: '#CB7F32'} : {}}
                >
                  <Image src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: PRODUCT INFO */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{finalProduct.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>Brand: <span className="font-medium text-gray-900">{finalProduct.brand}</span></span>
                <span>•</span>
                <span>Category: <span className="font-medium text-gray-900">{finalProduct.category}</span></span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 text-white px-3 py-1 rounded-lg" style={{backgroundColor: '#0A7E36'}}>
                  <Star size={16} fill="currentColor" />
                  <span className="font-semibold">{finalProduct.rating}</span>
                </div>
                <span className="text-gray-600">({finalProduct.reviewsCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">₹{finalProduct.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{finalProduct.mrp}</span>
                  <span className="text-white px-2 py-1 rounded text-sm font-semibold" style={{backgroundColor: '#0A7E36'}}>
                    {finalProduct.discount}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
              </div>
            </div>

            {/* Stock & Quantity */}
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Quantity:</span>
                <div className={`text-sm ${finalProduct.inStock ? 'text-green-600' : 'text-red-600'}`} style={finalProduct.inStock ? {color: '#0A7E36'} : {}}>
                  {finalProduct.inStock ? `${finalProduct.stockCount} left in stock` : 'Out of stock'}
                </div>
              </div>
              
              {finalProduct.inStock && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">Net Qty: {finalProduct.quantity}</span>
                </div>
              )}
            </div>

            {/* Add to Cart Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!finalProduct.inStock}
                className="w-full text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:bg-gray-300"
                style={finalProduct.inStock ? {backgroundColor: '#CB7F32'} : {}}
                onMouseEnter={(e) => {
                  if (finalProduct.inStock) {
                    e.target.style.backgroundColor = 'rgba(203, 127, 50, 0.9)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (finalProduct.inStock) {
                    e.target.style.backgroundColor = '#CB7F32';
                  }
                }}
              >
                <ShoppingCart size={20} />
                {finalProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              {finalProduct.inStock && (
                <button 
                  className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                  style={{backgroundColor: '#0A7E36'}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(10, 126, 54, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#0A7E36';
                  }}
                >
                  Buy Now
                </button>
              )}
            </div>

            {/* Delivery Info */}
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Truck size={20} style={{color: '#0A7E36'}} />
                <span className="font-medium">Delivery Information</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#0A7E36'}}></span>
                  {finalProduct.delivery.estimated}
                </p>
                <p className="flex items-center gap-2">
                  <Shield size={16} className="text-blue-600" />
                  {finalProduct.delivery.returnPolicy}
                </p>
                <p className="font-medium" style={{color: '#0A7E36'}}>{finalProduct.delivery.freeDelivery}</p>
              </div>
            </div>

            {/* Offers */}
            <div className="bg-gradient-to-r p-4 rounded-lg border" style={{background: 'linear-gradient(to right, rgba(203, 127, 50, 0.1), rgba(10, 126, 54, 0.1))'}}>
              <h3 className="font-semibold mb-3" style={{color: '#CB7F32'}}>🎉 Special Offers</h3>
              <div className="space-y-2">
                {finalProduct.offers.slice(0, showAllOffers ? finalProduct.offers.length : 3).map((offer, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="font-bold mt-1" style={{color: '#CB7F32'}}>•</span>
                    <span className="text-gray-700">{offer}</span>
                  </div>
                ))}
              </div>
              {finalProduct.offers.length > 3 && (
                <button
                  onClick={() => setShowAllOffers(!showAllOffers)}
                  className="font-medium text-sm mt-2 hover:underline"
                  style={{color: '#CB7F32'}}
                >
                  {showAllOffers ? 'Show less' : `View all ${finalProduct.offers.length} offers`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="border-b">
            <div className="flex gap-8 px-6">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-medium capitalize transition-colors relative ${
                    activeTab === tab 
                      ? 'border-b-2' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={activeTab === tab ? {color: '#CB7F32', borderBottomColor: '#CB7F32'} : {}}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed">{finalProduct.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {finalProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#CB7F32'}}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(finalProduct.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-600 capitalize">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <Star size={20} fill="gold" className="text-yellow-500" />
                    <span className="font-semibold">{finalProduct.rating}</span>
                    <span className="text-gray-600">({finalProduct.reviewsCount})</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {finalProduct.reviews.map((review, i) => (
                    <div key={i} className="border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={14}
                              className={j < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                            />
                          ))}
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
      </div>
    </div>
  );
}