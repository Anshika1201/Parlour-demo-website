"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useLoadingTracker() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading;
}
