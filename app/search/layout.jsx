"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MobileBackButton from "@/components/MobileBackButton";

export default function SearchLayout({ children }) {
  return (
    <>

      {/* Mobile back button */}
      <MobileBackButton />

      {/* Main content */}
      <main className="min-h-screen ">{children}</main>

      <Footer />
    </>
  );
}
