"use client";

import { useState, useEffect } from "react";
import { Edit, Trash2, UserCheck, UserX } from "lucide-react";

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // Example dummy vendors (replace with API later)
    setVendors([
      { id: 1, name: "Tech Store", email: "tech@store.com", phone: "9876543210", address: "123 Main St, Delhi", status: "Active" },
      {
        id: 2,
        name: "Gadget Hub",
        email: "gadget@hub.com",
        phone: "9123456780",
        address: "456 Market Rd, Mumbai",
        status: "Inactive",
      },
    ]);
  }, []);

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <UserCheck className="w-7 h-7 text-green-700" />
        Vendors
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow divide-y divide-green-100">
          <thead className="bg-green-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Address</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-green-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-green-700">No vendors found.</td>
              </tr>
            )}
            {vendors.map((vendor) => (
              <tr key={vendor.id} className="hover:bg-green-50 transition">
                <td className="px-6 py-4 font-medium text-green-900">{vendor.name}</td>
                <td className="px-6 py-4 font-medium text-green-900">{vendor.email}</td>
                <td className="px-6 py-4 font-medium text-green-900">{vendor.phone}</td>
                <td className="px-6 py-4 font-medium text-green-900">{vendor.address}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${vendor.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{vendor.status}</span>
                </td>
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
