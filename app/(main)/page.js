import React from 'react';
import AutoSlider from "@/components/AutoSlider";
import BottomNavbar from "@/components/Navbar/NavbarBottom";
import ProductSection from "@/components/product/ProductSection";
import ShopByCategory from '@/components/ShopBycategory';
import ProductFilter from '@/components/product/ProductFilter';
import { freshProducts, mobileAccessories, electronics, homeKitchen, fashion, toys } from '@/lib/products';
import { categories } from '@/lib/categories';

const banners = ["/Banners/banner1.png", "/Banners/bannner3.jpg"];

const sections = [
  { key: 'grocery', title: 'Grocery', products: freshProducts, seeMoreLink: '/categories/grocery' },
  { key: 'mobiles', title: 'Mobile Accessories', products: mobileAccessories, seeMoreLink: '/categories/mobiles' },
  { key: 'electronics', title: 'Electronics', products: electronics, seeMoreLink: '/categories/electronics' },
  { key: 'home-kitchen', title: 'Home & Kitchen', products: homeKitchen, seeMoreLink: '/categories/home-kitchen' },
  { key: 'fashion', title: 'Fashion', products: fashion, seeMoreLink: '/categories/fashion' },
  { key: 'toys', title: 'Toys', products: toys, seeMoreLink: '/categories/toys' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <AutoSlider images={banners} interval={3000} />
      </div>

      <div className="w-full">
        <ShopByCategory />

        <ProductFilter categories={categories.map(c => c.name)} />

        {sections.map((s) => (
          <ProductSection key={s.key} title={s.title} products={s.products} seeMoreLink={s.seeMoreLink} />
        ))}
      </div>

      <BottomNavbar />
    </div>
  );
}
