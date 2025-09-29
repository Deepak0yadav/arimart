"use client";
import ProductList from "@/components/product/ProductList";

export default function AllProductsPage() {
  // Example: fetch products from API or static data
  const products = [
    { id: 1, name: "Apple", price: 100, image: "/Banner/apple.jpeg" },
    { id: 2, name: "Banana", price: 50, image: "/Banner/banana.jpg" },
    { id: 3, name: "Carrot", price: 80, image: "/Banner/carrot.jpg" },
    { id: 4, name: "Potato", price: 40, image: "/Banner/potato.jpg" },
    { id: 5, name: "Spinach", price: 60, image: "/Banner/spinach.jpg" },
    { id: 6, name: "Tomato", price: 90, image: "/Banner/tomato.jpg" },
    { id: 7, name: "Onion", price: 70, image: "/Banner/onion.jpg" },
    { id: 8, name: "Bell Pepper", price: 120, image: "/Banner/bellpepper.jpg" },
    { id: 9, name: "Rice", price: 200, image: "/NavImages/rice-atta.png" },
    { id: 10, name: "Milk", price: 60, image: "/NavImages/dairy.png" },
    { id: 11, name: "Cold Drink", price: 40, image: "/NavImages/colddrink.png" },
    { id: 12, name: "Sweets", price: 150, image: "/NavImages/sweets.png" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-green-700">All Products</h1>
      <ProductList products={products} />
    </main>
  );
}
