// app/products/layout.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";


export default function ProductsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
