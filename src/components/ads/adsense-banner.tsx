"use client";

import { useEffect } from "react";

interface AdSenseBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSenseBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className = "",
  style = { display: "block" },
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-6985167612880362"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive}
    />
  );
}

// Predefined ad components for common use cases
export function HeaderBanner({ className }: { className?: string }) {
  return (
    <AdSenseBanner
      dataAdSlot="1234567890" // Replace with actual slot ID
      dataAdFormat="horizontal"
      className={className}
      style={{ display: "block", height: "90px" }}
    />
  );
}

export function SidebarBanner({ className }: { className?: string }) {
  return (
    <AdSenseBanner
      dataAdSlot="2345678901" // Replace with actual slot ID
      dataAdFormat="vertical"
      className={className}
      style={{ display: "block", width: "300px", height: "250px" }}
    />
  );
}

export function FooterBanner({ className }: { className?: string }) {
  return (
    <AdSenseBanner
      dataAdSlot="3456789012" // Replace with actual slot ID
      dataAdFormat="horizontal"
      className={className}
      style={{ display: "block", height: "90px" }}
    />
  );
}

export function ResponsiveBanner({ className }: { className?: string }) {
  return (
    <AdSenseBanner
      dataAdSlot="4567890123" // Replace with actual slot ID
      dataAdFormat="auto"
      className={className}
      style={{ display: "block" }}
    />
  );
}

export function InArticleBanner({ className }: { className?: string }) {
  return (
    <AdSenseBanner
      dataAdSlot="5678901234" // Replace with actual slot ID
      dataAdFormat="fluid"
      className={className}
      style={{ display: "block", textAlign: "center" }}
    />
  );
}
