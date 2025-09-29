import { Clock, ShoppingCart, Users } from "lucide-react";

export default function GroupCard({ group, joined }) {
  const membersCount = group.members?.length || 0;
  const isActive = membersCount >= group.minMembers;
  const progressPercentage = Math.min((membersCount / group.minMembers) * 100, 100);

  const timeLeft = () => {
    const diff = new Date(group.expiresAt) - new Date();
    if (diff <= 0) return "Expired";
    const hrs = Math.floor(diff / 1000 / 60 / 60);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    return `${hrs}h ${mins}m left`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
      {/* Image */}
      <div className="relative">
        <img
          src={group.image}
          alt={group.title}
          className="w-full h-36 md:h-44 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-3">
          {group.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            ₹{group.groupPrice}
          </span>
          <span className="text-xs md:text-sm text-gray-500 line-through">
            ₹{group.originalPrice}
          </span>
        </div>

        {/* Members & Time */}
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{membersCount}/{group.minMembers}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{timeLeft()}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              isActive ? "bg-green-500" : "bg-gray-400"
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Actions */}
        {joined ? (
          <button className="w-full bg-green-600 text-white py-2.5 md:py-3 px-4 rounded-lg text-sm md:text-base font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
        ) : (
          <button className="w-full bg-green-600 text-white py-2.5 md:py-3 px-4 rounded-lg text-sm md:text-base font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            {isActive ? "Buy Now" : "Join Group"}
          </button>
        )}
      </div>
    </div>
  );
}
