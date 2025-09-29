
import Link from "next/link";
import { Package, ShoppingCart, User } from "lucide-react";

function SummaryCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-gradient-to-br from-green-100 to-green-50 border border-green-200 rounded-xl shadow flex items-center gap-4 p-6">
      <div className="bg-green-600 text-white rounded-full p-3">
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <div className="text-lg font-semibold text-green-900">{label}</div>
        <div className="text-2xl font-bold text-green-700">{value}</div>
      </div>
    </div>
  );
}

export default function VendorHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-50 p-0">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-2">Welcome, Vendor!</h2>
            <p className="text-green-700">Manage products, view orders, and update your profile.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/vendor/products" className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition">
              <Package className="w-4 h-4 mr-2" /> Manage Products
            </Link>
            <Link href="/vendor/orders" className="inline-flex items-center px-4 py-2 text-sm font-semibold text-green-800 bg-green-100 border border-green-300 rounded-lg shadow hover:bg-green-200 transition">
              <ShoppingCart className="w-4 h-4 mr-2" /> View Orders
            </Link>
            <Link href="/vendor/profile" className="inline-flex items-center px-4 py-2 text-sm font-semibold text-green-800 bg-green-100 border border-green-300 rounded-lg shadow hover:bg-green-200 transition">
              <User className="w-4 h-4 mr-2" /> Profile
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SummaryCard icon={Package} label="Total Products" value={12} />
          <SummaryCard icon={ShoppingCart} label="Pending Orders" value={5} />
          <SummaryCard icon={User} label="Revenue" value={"₹54,300"} />
        </div>
      </div>
    </div>
  );
}
