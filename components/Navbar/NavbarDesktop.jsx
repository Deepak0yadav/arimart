"use client";
import { useState, useEffect, useRef } from "react";
import NavDropdown from "./NavDropdown";
import NotificationDropdown from "./NotificationDropdown";
import { User, ShoppingCart, Tag } from "lucide-react"; // Added Tag
import Link from "next/link";
import SearchBarTrigger from "../SearchBarTrigger";

export default function NavbarDesktop({ navitems }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }

    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuOpen]);

  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full border-b bg-green-50 shadow-sm border-green-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-green-600 hover:text-green-700 transition-colors">
          Arimart
        </Link>

        {/* Search */}
        <div className="flex-grow ">
          <SearchBarTrigger />
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4 relative">
          {/* Deals */}
          <Link
            href="/group-buying"
            className="flex items-center gap-1 text-gray-800 font-semibold hover:text-gray-600 transition-colors">
            <Tag className="h-5 w-5" />
            <span>Group Deals</span>
          </Link>

          {/* Notifications */}
          <NotificationDropdown />

          {/* User */}
          <div
            className="relative"
            ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="h-7 w-7 text-gray-800" />
            </button>
            {userMenuOpen && (
              <div className="absolute text-2xl font-semibold right-0 top-full mt-1 w-40 rounded-md border bg-white shadow-lg z-50 overflow-hidden">
                <Link
                  href="/auth"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                  onClick={() => setUserMenuOpen(false)}>
                  Login
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                  onClick={() => setUserMenuOpen(false)}>
                  My Orders
                </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-7 w-7 text-gray-800" />
            <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Categories - Merged seamlessly */}
      <div className="flex items-center gap-6 px-6 py-3 justify-center relative z-40 bg-green-50">
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
