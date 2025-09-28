import React from 'react';
import AutoSlider from "@/components/AutoSlider";
import BottomNavbar from "@/components/Navbar/NavbarBottom";
import ProductSection from "@/components/product/ProductSection";
import ShopByCategory from '@/components/ShopBycategory';

function Home() {
  const banners = [
    "/Banners/banner1.png",
    "/Banners/bannner3.jpg",
  ];

  const freshProducts = [
    { id: 1, name: "Apples", description: "Fresh and juicy red apples", price: 120, image: "/Banner/apple.jpeg" },
    { id: 2, name: "Bananas", description: "Ripe bananas full of energy", price: 60, image: "/Banner/banana.jpg" },
    { id: 3, name: "Carrots", description: "Crunchy and healthy carrots", price: 80, image: "/Banner/carrot.jpg" },
    { id: 4, name: "Tomatoes", description: "Farm fresh red tomatoes", price: 50, image: "/Banner/tomato.jpg" },
    { id: 5, name: "Spinach", description: "Green leafy spinach full of iron", price: 40, image: "/Banner/spinach.jpg" },
    { id: 6, name: "Onions", description: "Fresh white onions", price: 35, image: "/Banner/onion.jpg" },
    { id: 7, name: "Potatoes", description: "Farm fresh potatoes", price: 25, image: "/Banner/potato.jpg" },
    { id: 8, name: "Bell Peppers", description: "Colorful bell peppers", price: 90, image: "/Banner/bellpepper.jpg" },
  ];

  const mobileAccessories = [
    { id: 1, name: "boAt Power Bank", price: 1099, image: "/Banner/power1.jpg" },
    { id: 2, name: "Ambrane Power Bank", price: 1399, image: "/Banner/power2.jpg" },
    { id: 3, name: "Realme Buds", price: 799, image: "/Banner/ear1.jpg" },
    { id: 4, name: "Redmi Earbuds", price: 999, image: "/Banner/ear2.jpg" },
    { id: 5, name: "Spigen Mobile Cover", price: 599, image: "/Banner/cover1.jpg" },
    { id: 6, name: "Ringke Mobile Cover", price: 499, image: "/Banner/cover2.jpg" },
    { id: 7, name: "Samsung Charger", price: 899, image: "/Banner/charger1.jpg" },
    { id: 8, name: "Anker Charger", price: 1299, image: "/Banner/charger2.jpg" },
  ];

  const electronics = [
    { id: 1, name: "Smart TV", price: 24999, image: "/Banner/tv1.jpg" },
    { id: 2, name: "Bluetooth Speaker", price: 1999, image: "/Banner/speaker1.jpg" },
    { id: 3, name: "Laptop", price: 49999, image: "/Banner/laptop1.jpg" },
    { id: 4, name: "Headphones", price: 1499, image: "/Banner/headphone1.jpg" },
    { id: 5, name: "Smart Watch", price: 2999, image: "/Banner/watch1.jpg" },
    { id: 6, name: "Gaming Console", price: 39999, image: "/Banner/console1.jpg" },
  ];

  const homeKitchen = [
    { id: 1, name: "Mixer Grinder", price: 2599, image: "/Banner/mixer.jpg" },
    { id: 2, name: "Non-Stick Pan", price: 899, image: "/Banner/pan.jpg" },
    { id: 3, name: "Dinner Set", price: 1999, image: "/Banner/dinner.jpg" },
    { id: 4, name: "Electric Kettle", price: 1499, image: "/Banner/kettle.jpg" },
    { id: 5, name: "Storage Box", price: 499, image: "/Banner/storage.jpg" },
    { id: 6, name: "Cooker", price: 1999, image: "/Banner/cooker.jpg" },
  ];

  const fashion = [
    { id: 1, name: "Men's T-Shirt", price: 499, image: "/Banner/tshirt.jpg" },
    { id: 2, name: "Women's Dress", price: 999, image: "/Banner/dress.jpg" },
    { id: 3, name: "Jeans", price: 799, image: "/Banner/jeans.jpg" },
    { id: 4, name: "Wrist Watch", price: 1999, image: "/Banner/watch2.jpg" },
    { id: 5, name: "Sneakers", price: 1599, image: "/Banner/shoes.jpg" },
    { id: 6, name: "Handbag", price: 1299, image: "/Banner/bag.jpg" },
  ];

  const toys = [
    { id: 1, name: "Teddy Bear", price: 499, image: "/Banner/teddy.jpg" },
    { id: 2, name: "Building Blocks", price: 799, image: "/Banner/blocks.jpg" },
    { id: 3, name: "Remote Car", price: 1299, image: "/Banner/car.jpg" },
    { id: 4, name: "Puzzle Game", price: 399, image: "/Banner/puzzle.jpg" },
    { id: 5, name: "Doll", price: 699, image: "/Banner/doll.jpg" },
    { id: 6, name: "Action Figure", price: 899, image: "/Banner/action.jpg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Slider */}
      <div className="w-full">
        <AutoSlider images={banners} interval={3000} />
      </div>

      {/* Sections */}
      <div className="w-full">
        <ShopByCategory/>

        <ProductSection
          title="Grocery"
          products={freshProducts}
          seeMoreLink="/categories/grocery"
        />

        <ProductSection
          title="Mobile Accessories"
          products={mobileAccessories}
          seeMoreLink="/categories/mobiles"
        />

        <ProductSection
          title="Electronics"
          products={electronics}
          seeMoreLink="/categories/electronics"
        />

        <ProductSection
          title="Home & Kitchen"
          products={homeKitchen}
          seeMoreLink="/categories/home-kitchen"
        />

        <ProductSection
          title="Fashion"
          products={fashion}
          seeMoreLink="/categories/fashion"
        />

        <ProductSection
          title="Toys"
          products={toys}
          seeMoreLink="/categories/toys"
        />
      </div>

      <BottomNavbar />
    </div>
  );
}

export default Home;
