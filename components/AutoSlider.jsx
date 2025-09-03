"use client";
import { useEffect, useState } from "react";

export default function AutoSlider({ images, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  // Auto play
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slider);
  }, [images.length, interval]);

  return (
    <div className="relative w-full overflow-hidden  shadow-md">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-65 md:h-75 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
        ❯
      </button>
    </div>
  );
}
