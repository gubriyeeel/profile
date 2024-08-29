import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="py-4">
        <div className="flex flex-row items-center justify-between -ml-[10px] sm:-ml-0">
          <Link href={"/"}>
            <div className="relative size-12">
              <Image src="/logo.svg" alt="logo" fill />
            </div>
          </Link>

          <Navigation className="flex" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
