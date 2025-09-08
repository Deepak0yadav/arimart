"use client";
import Link from "next/link";
import { Menu, Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function NavbarMobile({ navitems }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="md:hidden sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="text-xl font-bold text-green-600">
          Arimart
        </Link>

        {/* User & Cart */}
        <div>
          <Link href={"/login"}>
            <User className="h-6 w-6 text-gray-800 mx-2" />
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 py-2">
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

      {/* Mobile Navigation Links */}
      <div className="flex overflow-x-auto gap-4 px-4 py-3">
        {navitems.map((item) => (
          <Link
            key={item.name}
            href={`categories/${item.link}`}
            className="flex items-center gap-1 font-medium hover:text-green-600">
            <item.icon className="w-4 h-4" />
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
