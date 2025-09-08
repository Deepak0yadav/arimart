"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavDropdown({ item, subcategories }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      {/* Main Button */}
      <button className="flex items-center gap-1 font-medium hover:text-green-600">
        <item.icon className="w-4 h-4" />
        {item.name}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full mt-1 w-60 bg-white shadow-lg rounded-lg px-5 py-5 z-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-3  pb-2 text-center">
            {item.name}
          </h3>
          <ul className="space-y-3">
            {subcategories.map((sub, idx) => (
              <li key={idx}>
                <Link
                  href={`categories/${item.link}`}
                  className="block group">
                  <span className="font-medium text-gray-800 hover:text-green-600">
                    {sub}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
