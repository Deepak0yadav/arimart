"use client";

import { Search } from "lucide-react";

export default function SearchResults({ 
  query, 
  results = [], 
  loading = false,
  error = null 
}) {
  if (!query) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <p className="text-gray-700 mb-4">
        Showing results for <span className="font-semibold text-gray-900">"{query}"</span>
      </p>
      
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-500">Searching...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12 text-red-500">
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && results.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>Search functionality will be implemented here</p>
          <p className="text-sm mt-2">Connect with product database to show results</p>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium text-gray-900">{result.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{result.description}</p>
              <p className="text-green-600 font-semibold mt-2">{result.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}