"use client";

import Link from "next/link";

export default function SearchLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simplified Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12 md:h-14 relative">
            {/* Logo - Centered */}
            <Link href="/" className="text-lg md:text-xl font-bold text-green-600">
              Arimart
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="min-h-screen bg-gray-50">{children}</main>
    </div>
  );
}
