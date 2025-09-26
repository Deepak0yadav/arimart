"use client";
import Image from "next/image";

export default function ProductGallery({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
}) {
  const images = product.images || []; // fallback in case images is undefined

  return (
    <div className="space-y-4">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <Image
          src={images[selectedImageIndex]}
          alt={product.name}
          className="w-full h-[500px] object-cover"
          width={500}
          height={500}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                selectedImageIndex === index
                  ? "border-orange-600"
                  : "border-gray-200"
              }`}>
              <Image
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
