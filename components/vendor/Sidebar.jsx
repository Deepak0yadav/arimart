"use client";
import Link from "next/link";
import { Home, Box, ShoppingCart, User, Settings } from "lucide-react";


export default function Sidebar() {

      const links = [
        { label: "Dashboard", href: "/vendor", icon: Home },
        { label: "Products", href: "/vendor/products", icon: Box },
        { label: "Orders", href: "/vendor/orders", icon: ShoppingCart },
        { label: "Profile", href: "/vendor/profile", icon: User },
        { label: "Settings", href: "/vendor/settings", icon: Settings },
      ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8">Vendor Panel</h1>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-700 transition">
            {link.icon && <link.icon size={18} />}
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Optional Footer */}
      <div className="mt-auto text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Multi-Vendor Platform
      </div>
    </div>
  );
}
