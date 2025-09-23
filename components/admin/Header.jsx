
import { Bell, User } from "lucide-react";

export default function Header({ title }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-4">
        <Bell />
        <User />
      </div>
    </div>
  );
}
