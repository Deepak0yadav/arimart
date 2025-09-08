"use client";
import Link from "next/link";
import { categories } from "@/lib/categories";

export default function CategoriesSidebar({ active }) {
  return (
    <div className="w-28 sm:w-40 border-r p-4 space-y-6">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/categories/${cat.slug}`}
          className={`flex flex-col items-center space-y-2 ${
            active === cat.slug
              ? "text-green-600 font-semibold"
              : "text-gray-700"
          }`}>
          <div className="w-12 h-12 flex items-center justify-center rounded-full border shadow-sm bg-white">
            <cat.icon className="w-6 h-6" />
          </div>
          <span className="text-xs text-center">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}
