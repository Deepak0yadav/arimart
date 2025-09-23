"use client";

export default function SettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-gray-700">Site Name</label>
          <input
            type="text"
            placeholder="Enter site name"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Admin Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}
