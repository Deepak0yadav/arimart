export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-3 hover:shadow-md transition-shadow duration-200 flex flex-col min-w-0 w-full">
      {/* Image */}
      <div className="relative w-full h-32 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Name */}
      <h3 className="font-medium text-sm text-gray-900 leading-snug line-clamp-2 mb-1">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs line-clamp-2 mb-2">
        {product.description}
      </p>

      {/* Price + Button in one row */}
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-base text-gray-900">
          ₹{product.price}
        </span>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-1 px-3 rounded text-xs transition-colors duration-200 active:bg-yellow-700">
          Buy
        </button>
      </div>
    </div>
  );
}
