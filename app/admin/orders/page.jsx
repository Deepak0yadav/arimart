"use client";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
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
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Total</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-green-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-green-700">No orders found.</td>
              </tr>
            )}
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-green-50 transition">
                <td className="px-6 py-4 font-medium text-green-900">{order.id}</td>
                <td className="px-6 py-4 font-medium text-green-900">{order.customer}</td>
                <td className="px-6 py-4 font-medium text-green-900">${order.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</span>
                </td>
                <td className="px-6 py-4 flex justify-end gap-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
