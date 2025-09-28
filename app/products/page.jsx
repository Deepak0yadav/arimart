// ProductDetails.jsx
"use client";
import ProductActions from "@/components/product/ProductActions";
import ProductGallery from "@/components/product/ProductGallery";
import ProductTabs from "@/components/product/ProductTabs";
import { useState } from "react";


export default function ProductDetails() {
  // Mock product using your data structure
  const product = {
    id: 1,
    name: "Fresh Apples",
    description: "Fresh and juicy red apples from Kashmir orchards",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=600&fit=crop",
    ],
    features: [
      "Rich in fiber",
      "Boosts immunity",
      "Good for digestion",
      "Fresh from farm",
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 127,
    reviews: [
      { name: "Priya", rating: 5, comment: "Very fresh and tasty apples!" },
      { name: "Rahul", rating: 4, comment: "Good quality, delivered on time." },
      {
        name: "Sunita",
        rating: 4,
        comment: "Fresh produce, will order again.",
      },
    ],
    specifications: {
      weight: "1 kg pack",
      type: "Red apples",
      origin: "Kashmir",
      "shelf life": "7-10 days",
      quality: "Premium grade",
    },
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Main Product Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="md:flex">
            {/* Gallery */}
            <ProductGallery
              product={product}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />

            {/* Actions and Info */}
            <ProductActions
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              isWishlisted={isWishlisted}
              setIsWishlisted={setIsWishlisted}
            />
          </div>
        </div>

        {/* Tabs */}
        <ProductTabs
          product={product}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}
