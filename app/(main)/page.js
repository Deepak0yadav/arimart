import ImageSlider from '@/components/ImageSlider';
import React from 'react';
import AutoSlider from "@/components/AutoSlider";
import ProductCard from "@/components/ProductCard";

function Home() {
  const images = [
    "/NavImages/fruits.png",
    "/NavImages/masala.png",
    "/NavImages/rice-atta.png",
    "/NavImages/sweets.png",
    "/NavImages/toys.png",
    "/NavImages/dairy.png",
    "/NavImages/colddrink.png",
  ];

  const banners = [
    "/Banners/banner1.png",
    "/Banners/bannner3.jpg",
  ];

  const products = [
    { id: 1, name: "Apples", description: "Fresh and juicy red apples", price: 120, image: "/Banner/apple.jpeg" },
    { id: 2, name: "Bananas", description: "Ripe bananas full of energy", price: 60, image: "/Banner/banana.jpg" },
    { id: 3, name: "Carrots", description: "Crunchy and healthy carrots", price: 80, image: "/Banner/carrot.jpg" },
    { id: 4, name: "Tomatoes", description: "Farm fresh red tomatoes", price: 50, image: "/Banner/tomato.jpg" },
    { id: 5, name: "Spinach", description: "Green leafy spinach full of iron", price: 40, image: "/Banner/spinach.jpg" },
    { id: 6, name: "Onions", description: "Fresh white onions", price: 35, image: "/Banner/onion.jpg" },
    { id: 7, name: "Potatoes", description: "Farm fresh potatoes", price: 25, image: "/Banner/potato.jpg" },
    { id: 8, name: "Bell Peppers", description: "Colorful bell peppers", price: 90, image: "/Banner/bellpepper.jpg" },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Slider */}
      <div className='w-full mt-5'>
        <ImageSlider images={images} itemsPerView={4} />
      </div>

      {/* Banner Slider */}
      <div className='w-full mt-5'>
        <AutoSlider images={banners} interval={3000} />
      </div>

      {/* Products Section */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Fresh Products</h2>

        {/* Responsive Products Grid - Fewer columns for wider cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;