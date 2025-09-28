import { useState } from "react";
import { Users, Gift } from "lucide-react";

// Join Group Form Component
export default function JoinGroupForm({ onJoin }) {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (!code.trim()) return;
    onJoin(code.trim().toUpperCase());
    setCode("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <Gift className="h-5 w-5 text-green-600" />
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Join a Group</h2>
      </div>
      
      <p className="text-sm md:text-base text-gray-600 mb-4">
        Have a group code? Enter it below to join an existing deal.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          onKeyPress={handleKeyPress}
          className="flex-1 border-2 border-gray-200 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base focus:border-green-500 focus:outline-none transition-colors placeholder-gray-400"
          placeholder="Enter group code (e.g., ABC123)"
          maxLength={6}
        />
        <button
          onClick={handleSubmit}
          disabled={!code.trim()}
          className="bg-green-600 disabled:bg-gray-400 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium hover:bg-green-700 disabled:hover:bg-gray-400 transition-colors flex items-center justify-center gap-2 min-w-[100px]">
          <Users className="h-4 w-4" />
          Join
        </button>
      </div>
    </div>
  );
}
