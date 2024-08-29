import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export default function NavButton({ href, label, isActive }: Props) {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full justify-between border-none font-normal text-primary outline-none transition hover:bg-primary/20 hover:text-primary focus:bg-secondary/30 focus-visible:ring-transparent focus-visible:ring-offset-0 lg:w-auto pb-1",
        isActive ? "bg-primary/10 text-primary" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
