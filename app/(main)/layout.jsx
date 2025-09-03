import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-2 sm:px-4 lg:px-6">{children}</main>
      <Footer />
    </>
  );
}
