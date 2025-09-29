export default function VendorSettings() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Settings</h2>
      <div className="bg-white rounded-xl shadow p-8 max-w-lg mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-green-800 font-semibold">Enable Notifications</span>
          <input
            type="checkbox"
            className="w-5 h-5 accent-green-600"
            defaultChecked
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-green-800 font-semibold">Dark Mode</span>
          <input
            type="checkbox"
            className="w-5 h-5 accent-green-600"
          />
        </div>
      </div>
    </div>
  );
}
