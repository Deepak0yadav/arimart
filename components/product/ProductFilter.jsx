"use client";
import React, { useEffect, useRef, useState } from 'react';

// Light, greenish themed product filter with pills and a Filters button
export default function ProductFilter({ categories = [], onSelectCategory }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onDoc(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDoc);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onDoc);
    };
  }, []);

  const pills = (wrapClass = '') => (
    <>
      <button
        onClick={() => { onSelectCategory && onSelectCategory('all'); setOpen(false); }}
        className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-50 text-green-700 border border-green-100 shadow-sm text-sm sm:text-sm font-medium ${wrapClass}`}
      >
        All Products
      </button>

      {categories && categories.length > 0 ? (
        categories.map((c) => (
          <button
            key={c}
            onClick={() => { onSelectCategory && onSelectCategory(c); setOpen(false); }}
            className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}
          >
            {c}
          </button>
        ))
      ) : (
        // default pills
        <>
          <button className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}>Best Sellers</button>
          <button className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}>Trending</button>
          <button className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}>New Arrivals</button>
          <button className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}>Deals</button>
          <button className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}>Featured</button>
          <button className={`flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:text-green-700 text-sm ${wrapClass}`}>Premium</button>
        </>
      )}
    </>
  );

  return (
    <div className="w-full py-4" ref={menuRef}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">Recommended for you</h3>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full text-sm shadow-sm"
              aria-label="Open filters"
              aria-expanded={open}
            >
              {/* standard funnel/filter icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V19a1 1 0 01-1.447.894L9 17.118V13.414L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filters
            </button>

            {/* Popover menu - small and reuses same pills */}
            {open && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3">
                <div className="flex flex-wrap gap-2">
                  {pills('')}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Horizontal scroll only on small screens. On md+ allow wrapping and no scrollbar. */}
            <div className="flex items-center gap-2 sm:gap-3 pb-2 px-1 sm:px-2 md:flex-wrap md:justify-center md:overflow-visible overflow-x-auto scrollbar-hide">
              {pills()}
            </div>
            <div className="text-sm text-gray-500 mt-1 pl-2">Showing 20 products</div>
          </div>
        </div>
      </div>
    </div>
  );
}
