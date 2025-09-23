export default function VendorHome() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, Vendor!</h2>
      <p className="text-gray-600">
        This is your vendor dashboard. From here you can manage products, view
        orders, and update your profile.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-2">Total Products</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-2">Pending Orders</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-lg font-medium mb-2">Revenue</h3>
          <p className="text-3xl font-bold">₹54,300</p>
        </div>
      </div>
    </div>
  );
}
