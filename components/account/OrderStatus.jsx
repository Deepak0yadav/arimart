import React from 'react';
import { Clock, Package, CheckCircle } from 'lucide-react';

export default function OrderStatus() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">My Orders</h4>
        <a href="#" className="text-sm text-green-600">View All →</a>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-gray-100 text-center">
          <div className="mx-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-yellow-50 text-yellow-600"><Clock className="h-4 w-4" /></div>
          <div className="text-sm mt-2 text-gray-600">Pending to share</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-100 text-center">
          <div className="mx-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 text-blue-600"><Package className="h-4 w-4" /></div>
          <div className="text-sm mt-2 text-gray-600">To be delivered</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-100 text-center">
          <div className="mx-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-50 text-green-600"><CheckCircle className="h-4 w-4" /></div>
          <div className="text-sm mt-2 text-gray-600">Delivered</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-100 text-center">
          <div className="mx-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-50 text-red-500"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg></div>
          <div className="text-sm mt-2 text-gray-600">Canceled</div>
        </div>
      </div>
    </div>
  );
}
