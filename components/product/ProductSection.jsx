"use client";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

export default function ProductSection({ title, products, seeMoreLink }) {
  const displayedProducts = products.slice(0, 6);

  return (
    <section className="py-6 bg-white w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 relative">
          {title}
          <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-600 rounded-full"></div>
        </h2>
        <Link
          href={"/products/all"}
          className="text-sm text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-1 hover:gap-2 transition-all duration-200">
          See All
        </Link>
      </div>

        {/* Mobile Scroll */}
        <div className="sm:hidden overflow-x-auto flex gap-3 py-2 -mx-4 px-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-32">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Desktop Grid (auto-fit) */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
