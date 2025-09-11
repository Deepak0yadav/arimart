"use client";
import Link from "next/link";
import { User, Tag } from "lucide-react";
import SearchBarTrigger from "../SearchBarTrigger";

export default function NavbarMobile({ navitems }) {
  return (
    <nav className="md:hidden sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-green-600">
          Arimart
        </Link>

        {/* Right Section: User + Deals */}
        <div className="flex items-center gap-4">
          {/* Deals */}
          <Link
            href="/deals"
            className="flex items-center gap-1 text-gray-700 font-semibold hover:text-green-600">
            <Tag className="h-5 w-5" />
            <span className="hidden sm:inline">Deals</span>
          </Link>

          {/* User */}
          <Link href="/login">
            <User className="h-6 w-6 text-gray-800" />
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 py-2">
        <SearchBarTrigger />
      </div>

      {/* Mobile Navigation Links */}
      <div className="flex overflow-x-auto gap-4 px-4 py-3">
        {navitems.map((item) => (
          <Link
            key={item.name}
            href={`categories/${item.link}`}
            className="flex items-center gap-1 font-medium hover:text-green-600 whitespace-nowrap">
            <item.icon className="w-4 h-4" />
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
