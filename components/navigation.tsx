"use client";

import { usePathname } from "next/navigation";

import NavButton from "@/components/nav-button";

import { links } from "@/constants";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-2 overflow-x-auto ">
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
