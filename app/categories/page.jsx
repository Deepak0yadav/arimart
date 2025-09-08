import Link from "next/link";
import { categories } from "@/lib/categories";

export default function CategoriesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Categories</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border bg-gray-50 mb-2">
              <cat.icon className="w-8 h-8 text-gray-600" />
            </div>
            <span className="font-medium text-center">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
