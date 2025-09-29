"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { navitems } from "@/lib/navitems";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const showCategories = pathname === "/";
  return (
    <nav className="sticky top-0 left-0 w-full h-16 bg-white shadow-md z-50">
      <div className="hidden md:block h-full">
        <NavbarDesktop navitems={showCategories ? navitems : []} />
      </div>
      <div className="block md:hidden h-full">
        <NavbarMobile navitems={showCategories ? navitems : []} />
      </div>
    </nav>
  );
}
