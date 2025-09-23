import Sidebar from "@/components/vendor/Sidebar";
import Header from "@/components/vendor/Header";
import { Home, Box, ShoppingCart, User, Settings } from "lucide-react";

export default function VendorLayout({children}) {
  const links = [
    { label: "Dashboard", href: "/vendor", icon: Home },
    { label: "Products", href: "/vendor/products", icon: Box },
    { label: "Orders", href: "/vendor/orders", icon: ShoppingCart },
    { label: "Profile", href: "/vendor/profile", icon: User },
    { label: "Settings", href: "/vendor/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Vendor Dashboard" />
        <div className="p-6 flex-1 bg-gray-50">{children}</div>
      </div>
    </div>
  );
}
