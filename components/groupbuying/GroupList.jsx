"use client";
import { useState } from "react";
import GroupCard from "./GroupCard";
import JoinGroupForm from "./JoinGroupForm";

export default function GroupList({ initialGroups = [] }) {
  const [groups, setGroups] = useState(initialGroups);

  const handleJoin = (code) => {
    alert(`Joined group with code: ${code}`);
  };

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <JoinGroupForm onJoin={handleJoin} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.length === 0 ? (
          <div className="col-span-full text-center bg-red-50 p-6 rounded-lg text-red-600 font-medium">
            ❌ No active group buys found.
          </div>
        ) : (
          groups.map((g) => (
            <GroupCard
              key={g.id}
              group={g}
            />
          ))
        )}
      </div>
    </div>
  );
}
