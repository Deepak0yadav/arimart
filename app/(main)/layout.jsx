import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";


export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 md:pt-16 pb-16 bg-white">{children}</main>
      <Footer />
    </div>
  );
}
