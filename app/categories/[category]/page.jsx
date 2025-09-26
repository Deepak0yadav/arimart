"use client";

import { categories } from "@/lib/categories";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import MobileBackButton from "@/components/MobileBackButton";

export default function CategoryPage({ params }) {
  const { category } = params;
  const selectedCategory = categories.find((c) => c.slug === category);

  if (!selectedCategory) return <p className="p-6">Category not found</p>;

  return (
    <div className="relative min-h-screen flex bg-gray-50">
      <CategoriesSidebar active={category} />

      {/* Subcategories */}
      <div className="flex-1 p-6 pt-16 md:pt-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{selectedCategory.name}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {selectedCategory.subcategories.map((sub, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white text-center"
            >
              <p className="font-medium text-gray-800">{sub}</p>
              <p className="text-sm text-gray-500">View products</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
