import React from "react";
import GroupCard from "../../../components/groupbuying/GroupCard";
import MobileBackButton from "../../../components/MobileBackButton";

// Mock single group (in real app, fetch from API)
const mockGroup = {
  id: "1",
  code: "ABC123",
  title: "Organic Apples",
  image: "/apple.jpg",
  discount: 20,
  minMembers: 3,
  maxMembers: 10,
  members: [{ userId: "u1" }, { userId: "u2" }],
  expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
};

export default function GroupPage({ params }) {
  if (params.id !== mockGroup.id) {
    return <div className="p-6">Group not found or expired.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <MobileBackButton />
      <h2 className="text-2xl font-bold mb-4">Group Details</h2>
      <GroupCard group={mockGroup} />
    </div>
  );
}
