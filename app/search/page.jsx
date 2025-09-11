"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Later: fetch products via API
  };

  return (
    <div className="pt-20 px-6">
      {/* Real Input */}
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 border rounded-lg px-3 py-2">
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 outline-none text-base"
        />
        <button
          type="submit"
          className="text-green-600 font-semibold">
          Search
        </button>
      </form>

      {/* Example: Show entered query */}
      {query && (
        <p className="mt-4 text-gray-700">
          Showing results for <span className="font-semibold">{query}</span>
        </p>
      )}
    </div>
  );
}
