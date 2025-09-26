"use client";

import Link from "next/link";
import { categories } from "@/lib/categories";
import MobileBackButton from "@/components/MobileBackButton";

export default function CategoriesPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 pt-16 px-6">
      {/* Mobile back button */}
      <MobileBackButton />

      <h1 className="text-2xl font-bold mb-6 text-gray-900">All Categories</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((Cat) => (
          <Link
            key={Cat.slug}
            href={`/categories/${Cat.slug}`}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border bg-gray-50 mb-2">
              <Cat.icon className="w-8 h-8 text-gray-600" />
            </div>
            <span className="font-medium text-center text-gray-800">
              {Cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
