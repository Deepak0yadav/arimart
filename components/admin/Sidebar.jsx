
import Link from "next/link";

export default function Sidebar({ links }) {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-2 px-3 rounded hover:bg-gray-700 transition">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
