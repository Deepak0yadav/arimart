"use client";
import { useState, useRef } from "react";

export default function ImageSlider({ images = [], itemsPerView = 4 }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    if (current < images.length - itemsPerView) {
      setCurrent((prev) =>
        Math.min(prev + itemsPerView, images.length - itemsPerView)
      );
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => Math.max(prev - itemsPerView, 0));
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden bg-white mt-20 md:mt-28">
      {/* Desktop Slider */}
      <div
        ref={containerRef}
        className="hidden md:flex transition-transform duration-500 ease-out pb-4"
        style={{
          transform: `translateX(-${current * 140}px)`,
        }}>
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-3">
            <div
              className="bg-white rounded-xl shadow hover:shadow-md transition 
                          flex flex-col items-center justify-center 
                          w-28 h-32 lg:w-32 lg:h-36 p-2 cursor-pointer">
              <img
                src={img}
                alt={`slide-${index}`}
                className="h-24 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Scrollable on Mobile */}
      <div className="flex md:hidden overflow-x-auto gap-3 scrollbar-hide px-3 py-2 bg-white">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 bg-white rounded-xl shadow 
                       flex flex-col items-center justify-center p-2 cursor-pointer hover:shadow-md transition">
            <img
              src={img}
              alt={`mobile-slide-${index}`}
              className="h-24 object-contain"
            />
          </div>
        ))}
      </div>

      {/* ✅ Controls (perfect center on Desktop) */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="bg-white shadow-md hover:bg-gray-100 p-2 rounded-full transition">
          <span className="text-gray-700 text-xl">❮</span>
        </button>

        <button
          onClick={nextSlide}
          className="bg-white shadow-md hover:bg-gray-100 p-2 rounded-full transition">
          <span className="text-gray-700 text-xl">❯</span>
        </button>
      </div>
    </div>
  );
}
