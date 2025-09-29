"use client";
import JoinGroupForm from "../../components/groupbuying/JoinGroupForm";
import GroupCard from "../../components/groupbuying/GroupCard";

import { useState } from "react";

// Mock data
const mockGroups = [
  {
    id: "1",
    code: "ABC123",
    title: "Organic Red Apples",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&h=300&fit=crop",
    originalPrice: 180,
    groupPrice: 144,
    discount: 20,
    minMembers: 3,
    members: [{ userId: "u1" }, { userId: "u2" }],
    expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
  },
  {
    id: "2",
    code: "XYZ456",
    title: "Premium Paneer 1kg",
    image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop",
    originalPrice: 320,
    groupPrice: 272,
    discount: 15,
    minMembers: 2,
    members: [{ userId: "u1" }],
    expiresAt: new Date(Date.now() + 7200 * 1000).toISOString(),
  },
  {
    id: "3",
    code: "DEF789",
    title: "Basmati Rice 5kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    originalPrice: 850,
    groupPrice: 680,
    discount: 20,
    minMembers: 4,
    members: [{ userId: "u1" }, { userId: "u2" }, { userId: "u3" }],
    expiresAt: new Date(Date.now() + 5400 * 1000).toISOString(),
  }
];

export default function ArimartGroupBuying() {
  const [groups] = useState(mockGroups);
  const [tab, setTab] = useState("all");
  // Demo: joined groups are those with userId 'u1' in members
  const joinedGroups = groups.filter(g => g.members.some(m => m.userId === "u1"));

  const handleJoin = (code) => {
    alert(`Joining group: ${code}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Group Deals
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Join with friends and save more
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pt-8 md:pt-6">
        {/* Tabs */}
        <div className="flex gap-8 border-b mb-6">
          <button
            className={`pb-2 font-semibold text-lg border-b-2 transition-colors ${tab === "all" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"}`}
            onClick={() => setTab("all")}
          >
            All Group Buys
          </button>
          <button
            className={`pb-2 font-semibold text-lg border-b-2 transition-colors ${tab === "joined" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"}`}
            onClick={() => setTab("joined")}
          >
            My Joined Groups
          </button>
        </div>

        {/* Tab Content */}
        {tab === "all" ? (
          <>
            <JoinGroupForm onJoin={handleJoin} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
              {groups.map((group) => (
                <GroupCard
                  key={group.id}
                  group={group}
                  joined={false}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">My Joined Groups</h2>
            <p className="text-gray-600 mb-4">Groups you've joined and their current status</p>
            {joinedGroups.length === 0 ? (
              <div className="bg-white rounded-lg p-6 text-center text-gray-500 shadow">You haven't joined any groups yet</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {joinedGroups.map((group) => (
                  <GroupCard
                    key={group.id}
                    group={group}
                    joined={true}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
