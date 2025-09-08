"use client";
import Link from "next/link";
import { Home, ShoppingCart, User, Search, Menu } from "lucide-react";

export default function BottomNavbar() {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Search", href: "/search", icon: Search },
    { name: "Categories", href: "/categories", icon: Menu },
    { name: "Cart", href: "/cart", icon: ShoppingCart },
    { name: "Account", href: "/login", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-2 md:hidden z-50">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex flex-col items-center text-gray-700 hover:text-green-600">
          <item.icon className="w-6 h-6" />
          <span className="text-xs">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
