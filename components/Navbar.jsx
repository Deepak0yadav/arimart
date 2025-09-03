"use client";
import { useState } from "react";
import {
  Menu,
  ShoppingCart,
  Search,
  User,
  Apple,
  Smartphone,
  Tv,
  Home,
  Shirt,
  Gamepad2,
  Sparkles,
  Dumbbell,
  Pill,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navitems = [
    { name: "Grocery", link: "/grocery", icon: Apple },
    { name: "Mobile", link: "/mobile", icon: Smartphone },
    { name: "Electronics", link: "/electronics", icon: Tv },
    { name: "Home & Kitchen", link: "/home-kitchen", icon: Home },
    { name: "Fashion", link: "/fashion", icon: Shirt },
    { name: "Toys", link: "/toys", icon: Gamepad2 },
    { name: "Beauty", link: "/beauty", icon: Sparkles },
    { name: "Sports", link: "/sports", icon: Dumbbell },
    { name: "Pharmacy & Health", link: "/pharmacy-health", icon: Pill },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* 🔹 Top Header */}
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 py-10">
        {/* Left: Logo + Menu */}
        <div className="flex items-center ">
          <a
            href="/"
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-green-600">
            Arimart
          </a>
        </div>

        {/* Center: Search (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="flex w-full max-w-md items-center rounded-full border bg-gray-50 px-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent py-1 text-base font-medium focus:outline-none"
            />
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right: User + Cart */}
        <div className="flex items-center gap-4 relative">
          <a
            href="/deals"
            className="hidden text-base font-semibold text-gray-700 hover:text-green-600 md:block">
            Group Deals
          </a>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-7 w-7 text-gray-800" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-md">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sign Up
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  My Orders
                </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart className="h-7 w-7 text-gray-800" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Search (below header) */}
      <div className="px-4 py-2 md:hidden">
        <div className="flex items-center rounded-full border bg-gray-50 px-3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent py-2 text-sm focus:outline-none"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 🔹 Navigation Categories (Responsive & Scrollable) */}
      <nav
        className="flex items-center gap-6 px-4 py-4 sm:text-7 md:text-10 lg:text-10 font-medium text-gray-800 
             overflow-x-auto scrollbar-hide 
             justify-start sm:justify-center">
        {navitems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.link}
              className="flex items-center gap-2 whitespace-nowrap hover:text-green-600 flex-shrink-0">
              <Icon className="h-5 w-5" />
              {item.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
