"use client";
import Image from "next/image";

export default function ProductGallery({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
}) {
  const images = product.images || [];

  return (
    <div className="md:w-1/2">
      <div className="aspect-square bg-gray-100 relative">
        <img
          src={images[selectedImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails - Only show if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 px-4 pb-4 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                selectedImageIndex === index
                  ? "border-green-500"
                  : "border-gray-200"
              }`}>
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
