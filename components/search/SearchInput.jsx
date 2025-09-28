"use client";

import { Search, X } from "lucide-react";

export default function SearchInput({ 
  searchQuery, 
  setSearchQuery, 
  onSearch, 
  onClear, 
  placeholder = "Search for products, brands and more..." 
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2">
          <Search className="h-3.5 w-3.5 md:h-4 md:w-4 text-gray-400" />
        </div>
        <input
          type="text"
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-9 md:pl-10 pr-9 md:pr-10 py-2 md:py-2.5 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors bg-white shadow-sm"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2.5 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        )}
      </div>
    </form>
  );
}