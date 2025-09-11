"use client";
import { useState } from "react";
import NavDropdown from "./NavDropdown";
import { User, ShoppingCart, Tag } from "lucide-react"; // Added Tag
import Link from "next/link";
import SearchBarTrigger from "../SearchBarTrigger";

export default function NavbarDesktop({ navitems }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 gap-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-green-600">
          Arimart
        </Link>

        {/* Search */}
        <div className="flex-grow ">
          <SearchBarTrigger />
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-6 relative">
          {/* Deals */}
          <Link
            href="/deals"
            className="flex items-center gap-1 text-gray-700 font-semibold hover:text-green-600"
          >
            <Tag className="h-5 w-5" />
            <span>Group Deals</span>
          </Link>

          {/* User */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <User className="h-7 w-7 text-gray-800" />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-md">
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Orders
                </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart className="h-7 w-7 text-gray-800" />
            <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="flex items-center gap-6 px-6 py-3 justify-center relative z-40  bg-white">
        {navitems.map((item) => (
          <NavDropdown key={item.name} item={item} subcategories={item.subs} />
        ))}
      </div>
    </nav>
  );
}
