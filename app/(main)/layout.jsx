import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-2 sm:px-2 lg:px-4">{children}</main>
      <Footer />
    </>
  );
}
