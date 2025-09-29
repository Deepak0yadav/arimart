"use client";
import React from 'react';
import Link from 'next/link';

export default function ProfileHeader({ user = {}, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">{(user.name || 'D').charAt(0)}</div>
          <div>
            <div className="font-semibold text-gray-800">{user.name || 'Deeps'}</div>
            <div className="text-sm text-gray-500">{user.email || 'email@example.com'}<br/>{user.phone || '+91 0000000000'}</div>
          </div>
        </div>

        <div>
          <button
            onClick={(e) => { e.preventDefault(); onEdit && onEdit(); }}
            className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-green-700"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
