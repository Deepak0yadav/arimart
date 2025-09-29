"use client";
import { useState, useEffect } from "react";

export default function VendorOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: 101, customer: "Alice", status: "Pending", total: "₹2000" },
      { id: 102, customer: "Bob", status: "Shipped", total: "₹1500" },
    ]);
  }, []);

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow divide-y divide-green-100">
          <thead className="bg-green-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-green-50 transition">
                <td className="px-6 py-4 font-medium text-green-900">{o.id}</td>
                <td className="px-6 py-4 font-medium text-green-900">{o.customer}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${o.status === 'Shipped' ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{o.status}</span>
                </td>
                <td className="px-6 py-4 font-medium text-green-900">{o.total}</td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-green-700">No orders yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
