import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import AutoSlider from "@/components/AutoSlider";
import CategoriesSidebar from "@/components/CategoriesSidebar";
import ProductSection from "@/components/product/ProductSection";
import { categories } from "@/lib/categories";

const sliderImages = [
  "/Banners/banner1.png",
  "/Banners/banner2.jpg",
  "/Banners/bannner3.jpg",
];

const products1 = [
  { id: 1, name: "Apple", price: 100, image: "/Banner/apple.jpeg", unit: "1 kg", features: ["Fresh", "Farm picked"], rating: 4.3, reviewCount: 1800 },
  { id: 2, name: "Banana", price: 50, image: "/Banner/banana.jpg", unit: "1 dozen", features: ["Sweet", "Rich in Potassium"], rating: 3.6, reviewCount: 1000 },
  { id: 3, name: "Carrot", price: 80, image: "/Banner/carrot.jpg", unit: "500g", features: ["Crunchy", "Vitamin A"], rating: 3.8, reviewCount: 1000 },
];

const products2 = [
  { id: 4, name: "Potato", price: 40, image: "/Banner/potato.jpg", unit: "1 kg", features: ["Versatile", "Starchy"], rating: 3.2, reviewCount: 1900 },
  { id: 5, name: "Spinach", price: 60, image: "/Banner/spinach.jpg", unit: "250g", features: ["Leafy", "Iron rich"], rating: 4.7, reviewCount: 225 },
  { id: 6, name: "Tomato", price: 90, image: "/Banner/tomato.jpg", unit: "1 kg", features: ["Juicy", "Vitamin C"], rating: 4.0, reviewCount: 900 },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AutoSlider images={sliderImages} />
          <div className="flex gap-6 mt-8">
            <CategoriesSidebar />
            <div className="flex-1 space-y-10">
              <ProductSection title="Fresh Fruits" products={products1} seeMoreLink="/products/all" />
              <ProductSection title="Vegetables" products={products2} seeMoreLink="/products/all" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
