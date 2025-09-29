"use client";

export default function SettingsPage() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Store Settings</h2>
      <div className="bg-white p-8 rounded-xl shadow space-y-6 max-w-lg mx-auto">
        <div>
          <label className="block text-green-800 font-semibold mb-2">Store Name</label>
          <input
            type="text"
            placeholder="Enter store name"
            className="mt-1 block w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50 text-green-900"
          />
        </div>
        <div>
          <label className="block text-green-800 font-semibold mb-2">Store Address</label>
          <input
            type="text"
            placeholder="Enter store address"
            className="mt-1 block w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50 text-green-900"
          />
        </div>
        <div>
          <label className="block text-green-800 font-semibold mb-2">Support Email</label>
          <input
            type="email"
            placeholder="Enter support email"
            className="mt-1 block w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50 text-green-900"
          />
        </div>
        <div>
          <label className="block text-green-800 font-semibold mb-2">Support Phone</label>
          <input
            type="tel"
            placeholder="Enter support phone number"
            className="mt-1 block w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50 text-green-900"
          />
        </div>
        <div>
          <label className="block text-green-800 font-semibold mb-2">Admin Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            className="mt-1 block w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50 text-green-900"
          />
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 font-semibold">
          Save Settings
        </button>
      </div>
    </div>
  );
}
