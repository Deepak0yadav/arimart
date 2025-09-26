import { Clock, ShoppingCart, Users } from "lucide-react";

export default function GroupCard({ group }) {
  const membersCount = group.members?.length || 0;
  const isActive = membersCount >= group.minMembers;

  const timeLeft = () => {
    const diff = new Date(group.expiresAt) - new Date();
    if (diff <= 0) return "Expired";
    const hrs = Math.floor(diff / 1000 / 60 / 60);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    return `${hrs}h ${mins}m left`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative">
        <img
          src={group.image}
          alt={group.title}
          className="w-full h-44 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
          {group.discount}% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{group.title}</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            ₹{group.groupPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{group.originalPrice}
          </span>
        </div>

        {/* Members & Time */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {membersCount}/{group.minMembers}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {timeLeft()}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
          <div
            className={`h-1.5 rounded-full ${
              isActive ? "bg-green-500" : "bg-orange-400"
            }`}
            style={{
              width: `${Math.min(
                (membersCount / group.minMembers) * 100,
                100
              )}%`,
            }}></div>
        </div>

        {/* Status */}
        {isActive && (
          <p className="text-xs text-green-600 font-medium mb-3">
            ✓ Deal Active!
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            {isActive ? "Buy Now" : "Join"}
          </button>
        </div>

        {/* Group Code */}
        <div className="mt-3 text-center">
          <span className="text-xs text-gray-500">Code: </span>
          <span className="text-xs font-mono font-semibold text-gray-700">
            {group.code}
          </span>
        </div>
      </div>
    </div>
  );
}
