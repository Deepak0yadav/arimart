"use client";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

export default function ProductSection({ title, products, seeMoreLink }) {
  const displayedProducts = products.slice(0, 6);

  return (
    <section className="py-2">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">
          {title}
        </h2>
        {seeMoreLink && (
          <Link
            href={seeMoreLink}
            className="text-sm text-[#CB7F32] font-medium hover:underline">
            See All
          </Link>
        )}
      </div>

      {/* Mobile Scroll */}
      <div className="sm:hidden overflow-x-auto flex gap-1 py-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-36">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
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
