"use client";
import { useState, useEffect } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function VendorProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: "Product A", price: "₹1000", stock: 20 },
      { id: 2, name: "Product B", price: "₹1500", stock: 12 },
    ]);
  }, []);

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Products</h2>
        <Link
          href="/vendor/products/new"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
          <Plus className="w-4 h-4" /> Add Product
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow divide-y divide-green-100">
          <thead className="bg-green-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Stock</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-green-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-green-50 transition">
                <td className="px-6 py-4 font-medium text-green-900">{p.id}</td>
                <td className="px-6 py-4 font-medium text-green-900">{p.name}</td>
                <td className="px-6 py-4 font-medium text-green-900">{p.price}</td>
                <td className="px-6 py-4 font-medium text-green-900">{p.stock}</td>
                <td className="px-6 py-4 flex justify-end gap-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition flex items-center gap-1">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition flex items-center gap-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
