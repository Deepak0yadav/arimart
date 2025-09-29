export default function VendorProfile() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Profile</h2>
      <div className="bg-white rounded-xl shadow p-8 max-w-lg mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-green-800 font-semibold mb-2">Name</label>
            <input
              className="w-full border border-green-300 px-4 py-2 rounded-lg bg-green-50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue="Vendor Name"
            />
          </div>
          <div>
            <label className="block text-green-800 font-semibold mb-2">Email</label>
            <input
              className="w-full border border-green-300 px-4 py-2 rounded-lg bg-green-50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue="vendor@example.com"
            />
          </div>
          <div>
            <label className="block text-green-800 font-semibold mb-2">Phone</label>
            <input
              className="w-full border border-green-300 px-4 py-2 rounded-lg bg-green-50 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue="+91 98765 43210"
            />
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 font-semibold">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}