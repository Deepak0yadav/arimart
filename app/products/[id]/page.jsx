"use client";

import { allProducts } from "@/lib/products";
import ProductDetails from "../page";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = allProducts.find(p => p.id.toString() === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-600">
        Product not found.
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
