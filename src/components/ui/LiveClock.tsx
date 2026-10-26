"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

type LiveClockProps = {
  /** "24h" → 23:52 (hero), "12h" → 11:52 PM (footer). */
  format: "24h" | "12h";
};

/** Current time in Dhaka, refreshed every 15 seconds. */
export function LiveClock({ format }: LiveClockProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  const text = new Intl.DateTimeFormat(format === "24h" ? "en-GB" : "en-US", {
    timeZone: site.timeZone,
    hour: format === "24h" ? "2-digit" : "numeric",
    minute: "2-digit",
    hour12: format === "12h",
  }).format(now);

  return (
    <time dateTime={now.toISOString()} suppressHydrationWarning>
      {text}
    </time>
  );
}
