"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

/** Current time in Dhaka with AM/PM (e.g. "1:20 PM"), refreshed every 15 seconds. */
export function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  const text = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  return (
    <time dateTime={now.toISOString()} suppressHydrationWarning>
      {text}
    </time>
  );
}
