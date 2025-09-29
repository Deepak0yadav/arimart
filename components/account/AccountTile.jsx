import React from 'react';
import Link from 'next/link';

export default function AccountTile({ icon, label, href = '#' }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm">
      <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">{icon}</div>
      <div className="text-sm text-gray-700">{label}</div>
    </Link>
  );
}
