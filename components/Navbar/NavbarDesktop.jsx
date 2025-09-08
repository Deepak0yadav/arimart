"use client";
import { useState } from "react";
import NavDropdown from "./NavDropdown";
import { User, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

export default function NavbarDesktop({ navitems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl mx-2 font-bold text-green-600">
          Arimart
        </Link>

        {/* Search */}
        <div className="flex-1 px-4">
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

        {/* Right Menu */}
        <div className="flex items-center gap-4 relative">
          <Link
            href="/deals"
            className="text-gray-700 font-semibold hover:text-green-600">
            Group Deals
          </Link>

          {/* User */}
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
                  className="block px-4 py-2 hover:bg-gray-100">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 hover:bg-gray-100">
                  Sign Up
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 hover:bg-gray-100">
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
      <div className="flex items-center gap-6 px-4 py-4 justify-center relative z-40">
        {navitems.map((item) => (
          <NavDropdown
            key={item.name}
            item={item}
            subcategories={item.subs}
          />
        ))}
      </div>
    </nav>
  );
}
