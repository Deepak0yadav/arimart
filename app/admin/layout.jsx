
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({ children }) {
  // Define admin links here
  const links = [
    { label: "Products", href: "/admin/products" },
    { label: "Orders", href: "/admin/orders" },
    { label: "Vendors", href: "/admin/vendors" },
    { label: "Settings", href: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar links={links} />

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        <Header title="Admin Dashboard" />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
