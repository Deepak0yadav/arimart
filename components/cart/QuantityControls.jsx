import React from 'react';
import { Plus, Minus } from "lucide-react";

const QuantityControls = ({ quantity, onQuantityChange, disabled = false, compact = false }) => {
  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    onQuantityChange(newQuantity);
  };

  if (compact) {
    return (
      <div className="flex items-center border-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="p-2 hover:bg-red-50 disabled:opacity-50 transition-all duration-200 border-r hover:text-red-600 disabled:hover:bg-gray-50 disabled:hover:text-gray-400"
          disabled={quantity <= 1 || disabled}
          aria-label="Decrease quantity"
        >
          <Minus size={14} strokeWidth={2} />
        </button>
        <span className="px-4 py-2 font-bold min-w-[3rem] text-center text-base bg-gray-50">
          {quantity}
        </span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="p-2 hover:bg-green-50 disabled:opacity-50 transition-all duration-200 border-l hover:text-green-600 disabled:hover:bg-gray-50 disabled:hover:text-gray-400"
          disabled={disabled}
          aria-label="Increase quantity"
        >
          <Plus size={14} strokeWidth={2} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center border rounded-lg bg-white">
      <button
        onClick={() => handleQuantityChange(-1)}
        className="p-1.5 hover:bg-gray-50 disabled:opacity-50 transition-colors"
        disabled={quantity <= 1 || disabled}
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="px-3 py-1.5 font-medium min-w-[2.5rem] text-center">
        {quantity}
      </span>
      <button
        onClick={() => handleQuantityChange(1)}
        className="p-1.5 hover:bg-gray-50 disabled:opacity-50 transition-colors"
        disabled={disabled}
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantityControls;