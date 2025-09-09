"use client";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

export default function ProductSection({ title, products, seeMoreLink }) {
  // Only show limited products in desktop grid (e.g., 6 max)
  const displayedProducts = products.slice(0, 6);

  return (
    <section className="py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
        {seeMoreLink && (
          <Link
            href={seeMoreLink}
            className="text-sm text-green-600 font-medium hover:underline">
            See All
          </Link>
        )}
      </div>

      {/* Products */}
      {/* Mobile: Horizontal Scroll */}
      <div className="sm:hidden">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[150px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid with limited products */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
