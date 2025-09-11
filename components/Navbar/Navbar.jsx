"use client";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { navitems } from "@/lib/navitems";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50 ">
      <div className="hidden md:block h-full">
        <NavbarDesktop navitems={navitems} />
      </div>
      <div className="block md:hidden h-full">
        <NavbarMobile navitems={navitems} />
      </div>
    </nav>
  );
}
