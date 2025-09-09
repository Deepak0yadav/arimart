export default function ProductCard({ product }) {
  return (
    <div
      className="flex flex-col min-w-0 w-full max-w-[180px] sm:max-w-[200px] 
      transition-shadow duration-200 hover:shadow-md rounded-md p-2 sm:p-3">
      {/* Image Box with Border */}
      <div
        className="relative w-full h-40 sm:h-36 flex items-center justify-center 
        bg-gray-50 border border-gray-200 rounded-md overflow-hidden mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Name */}
      <h3
        className="font-medium text-sm sm:text-base text-gray-900 leading-snug 
        line-clamp-2 mb-1">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-2">
        {product.description}
      </p>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-auto gap-3">
        <span className="font-bold text-sm sm:text-base text-gray-900">
          ₹{product.price}
        </span>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium 
          py-1 px-3 sm:px-4 rounded text-xs sm:text-sm transition-colors duration-200 
          active:bg-yellow-700">
          Buy
        </button>
      </div>
    </div>
  );
}
