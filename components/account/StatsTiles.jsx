import React from 'react';

export default function StatsTiles({ stats = [] }) {
  return (
    <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
      {stats.map((s) => (
        <div key={s.id} className={`flex flex-col items-center justify-center p-3 rounded-lg border border-gray-100 ${s.color}`}>
          <div className={`text-sm font-semibold ${s.text}`}>{s.value}</div>
          <div className="text-xs text-gray-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
