"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function MobileBackButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if there's history to go back to
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
      aria-label="Go back"
    >
      <ArrowLeft className="h-6 w-6 text-gray-700" />
    </button>
  );
}
