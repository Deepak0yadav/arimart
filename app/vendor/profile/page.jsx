export default function VendorProfile() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>
      <div className="bg-white rounded shadow p-6 max-w-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              className="w-full border px-3 py-2 rounded"
              defaultValue="Vendor Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full border px-3 py-2 rounded"
              defaultValue="vendor@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              className="w-full border px-3 py-2 rounded"
              defaultValue="+91 98765 43210"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
