"use client";
import Link from "next/link";
import { User, Tag } from "lucide-react";
import SearchBarTrigger from "../SearchBarTrigger";
import NotificationDropdown from "./NotificationDropdown";

export default function NavbarMobile({ navitems }) {
  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 z-50 w-full border-b bg-green-50 shadow-sm border-green-100">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
          Arimart
        </Link>

        {/* Right Section: Notifications + Deals + User */}
        <div className="flex items-center gap-2">
          {/* Deals */}
          <Link
            href="/group-buying"
            className="flex items-center gap-1 text-gray-800 font-medium hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100">
            <Tag className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">Deals</span>
          </Link>

          {/* Notifications */}
          <NotificationDropdown />

          {/* User */}
          <Link href="/auth" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <User className="h-6 w-6 text-gray-800" />
          </Link>
        </div>
      </div>

      {/* Mobile Search - Merged seamlessly */}
      <div className="px-4 py-3 bg-green-50">
        <SearchBarTrigger />
      </div>

      {/* Mobile Navigation Links - Only show if navitems exist */}
      {navitems.length > 0 && (
        <div className="flex overflow-x-auto gap-4 px-4 py-3 scrollbar-hide bg-green-50">
          {navitems.map((item) => (
            <Link
              key={item.name}
              href={`categories/${item.link}`}
              className="flex items-center gap-1 font-medium text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors">
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
