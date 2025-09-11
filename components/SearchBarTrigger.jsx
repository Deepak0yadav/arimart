"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBarTrigger() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/search")}
      className="flex w-full  items-center rounded-full border bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100">
      <Search className="h-5 w-5 text-gray-500 mr-2" />
      <span className="text-gray-500">Search products...</span>
    </div>
  );
}
