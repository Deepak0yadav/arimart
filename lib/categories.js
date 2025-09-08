// lib/categories.js

import { Apple, Smartphone, Tv, Shirt, Home, Sparkles, Gamepad2, Dumbbell, Pill } from "lucide-react";

export const categories = [
  {
    name: "Grocery",
    slug: "grocery",
    icon: Apple,
    subcategories: ["Fresh Vegetables", "Fruits", "Dairy Products", "Staples", "Beverages"],
  },
  {
    name: "Mobiles",
    slug: "mobiles",
    icon: Smartphone,
    subcategories: ["Smartphones", "Feature Phones", "Accessories"],
  },
  {
    name: "Electronics",
    slug: "electronics",
    icon: Tv,
    subcategories: ["Laptops", "Cameras", "Speakers"],
  },
  {
    name: "Fashion",
    slug: "fashion",
    icon: Shirt,
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Home & Kitchen",
    slug: "home-kitchen",
    icon: Home,
    subcategories: ["Furniture", "Decor", "Appliances"],
  },
  {
    name: "Beauty",
    slug: "beauty",
    icon: Sparkles,
    subcategories: ["Makeup", "Skincare", "Haircare"],
  },
      {
            name: "Toys",
            slug: "toys",
            icon: Gamepad2,
            subcategories: ["Action Figures", "Puzzles"],
      },
      {
            name: "Sports",
            slug: "sports",
            icon: Dumbbell,
            subcategories: ["Cricket", "Football", "Gym"],
      },
      {
            name: "Pharmacy & Health",
            slug: "pharmacy-health",
            icon: Pill,
            subcategories: ["Medicines", "Supplements"],
      },
];
