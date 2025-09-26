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

  const handleJoin = (code) => {
    alert(`Joining group: ${code}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Group Deals
          </h1>
          <p className="text-gray-600 text-center mt-1">
            Join with friends and save more
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <JoinGroupForm onJoin={handleJoin} />

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
