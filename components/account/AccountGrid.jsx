import React from 'react';
import AccountTile from './AccountTile';

export default function AccountGrid({ tiles = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-green-600 p-4 text-white font-semibold">My Account</div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tiles.map((t) => (
            <AccountTile key={t.key} icon={t.icon} label={t.label} href={t.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
