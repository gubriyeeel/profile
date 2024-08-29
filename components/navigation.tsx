"use client";

import { usePathname } from "next/navigation";

import NavButton from "@/components/nav-button";

import { links } from "@/constants";
import { cn } from "@/lib/utils";

type NavigationProps = {
  className?: string;
};

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-4 overflow-x-auto", className)}>
      {links.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
}
