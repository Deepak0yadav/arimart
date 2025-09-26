// ProductDetails.jsx
"use client";
import ProductActions from "@/components/product/ProductActions";
import ProductGallery from "@/components/product/ProductGallery";
import ProductTabs from "@/components/product/ProductTabs";
import { useState } from "react";


export default function ProductDetails({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-12">
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

      {/* Tabs */}
      <ProductTabs
        product={product}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
