"use client";

import { useState, useEffect } from "react";
import { Edit, Trash2, UserCheck, UserX } from "lucide-react";

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    // Example dummy vendors (replace with API later)
    setVendors([
      { id: 1, name: "Tech Store", email: "tech@store.com", status: "Active" },
      {
        id: 2,
        name: "Gadget Hub",
        email: "gadget@hub.com",
        status: "Inactive",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <UserCheck className="w-6 h-6 text-green-600" />
        Vendors
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {vendors.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-gray-500">
                  No vendors found.
                </td>
              </tr>
            )}

            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="px-6 py-4">{vendor.name}</td>
                <td className="px-6 py-4">{vendor.email}</td>
                <td className="px-6 py-4">
                  {vendor.status === "Active" ? (
                    <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                      <UserCheck className="w-4 h-4" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-600 font-medium">
                      <UserX className="w-4 h-4" /> Inactive
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 flex justify-end gap-3">
                  <button className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700">
                    <Trash2 className="w-4 h-4" /> Delete
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
