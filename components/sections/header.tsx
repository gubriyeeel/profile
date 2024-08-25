import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header>
      <div className="py-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              <div className="relative size-14">
                <Image src="/logo.svg" alt="logo" fill />
              </div>
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
