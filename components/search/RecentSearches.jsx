"use client";

import { Clock, X } from "lucide-react";

export default function RecentSearches({ 
  searches, 
  onSearchSelect, 
  onClearSearch,
  title = "Recent Searches" 
}) {
  if (!searches.length) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-gray-500" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-2">
        {searches.map((search, index) => (
          <div key={index} className="flex items-center justify-between group">
            <button
              onClick={() => onSearchSelect(search)}
              className="flex-1 text-left py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
            >
              {search}
            </button>
            <button
              onClick={() => onClearSearch(index)}
              className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}