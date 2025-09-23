"use client";
import { Bell, User } from "lucide-react";

export default function Header({ title }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2">
          <User />
          <span className="hidden md:inline">Vendor</span>
        </button>
      </div>
    </div>
  );
}
