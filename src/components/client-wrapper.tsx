"use client";

import { useEffect, useState, ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientWrapper({ children, fallback = null }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return <>{children}</>;
}
