
import { Package, ShoppingCart, Store, Plus, Users } from "lucide-react";
import Link from "next/link";

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

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-50 p-0">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-green-800 mb-2 drop-shadow">Admin Dashboard</h1>
            <p className="text-green-700">Welcome! Manage your ecommerce site efficiently.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/admin/products/new" className="inline-flex items-center px-5 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition">
              <Plus className="w-5 h-5 mr-2" /> Add Product
            </Link>
            <Link href="/admin/orders" className="inline-flex items-center px-5 py-2 text-base font-semibold text-green-800 bg-green-100 border border-green-300 rounded-lg shadow hover:bg-green-200 transition">
              <ShoppingCart className="w-5 h-5 mr-2" /> View Orders
            </Link>
            <Link href="/admin/vendors" className="inline-flex items-center px-5 py-2 text-base font-semibold text-green-800 bg-green-100 border border-green-300 rounded-lg shadow hover:bg-green-200 transition">
              <Users className="w-5 h-5 mr-2" /> Vendors
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SummaryCard icon={Package} label="Total Products" value={120} />
          <SummaryCard icon={ShoppingCart} label="Total Orders" value={450} />
          <SummaryCard icon={Store} label="Total Vendors" value={12} />
        </div>
      </div>
    </div>
  );
}
