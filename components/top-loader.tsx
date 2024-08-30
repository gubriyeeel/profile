"use client";

import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

export default function TopLoader() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextTopLoader
      color={theme === "dark" ? "white" : "black"}
      initialPosition={0.08}
      crawlSpeed={200}
      height={2}
      showSpinner={false}
      crawl={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
}
