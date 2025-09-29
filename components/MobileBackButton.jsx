"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileBackButton() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <button
      onClick={() => router.back()}
  className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition flex items-center justify-center h-10 w-10 self-center"
  style={{marginTop: 0}}>
      {/* Simple left arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
