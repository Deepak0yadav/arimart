
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function SearchLayout({ children }) {
  return (
    <>
      
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
