export default function VendorSettings() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <div className="bg-white rounded shadow p-6 max-w-lg space-y-4">
        <div className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            className="w-5 h-5"
            defaultChecked
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}
