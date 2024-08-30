import { cn } from "@/lib/utils";
import { LucideIcon, Utensils, Palette, Quote } from "lucide-react";

type FavoriteItemProps = {
  icon: "Utensils" | "Palette" | "Quote";
  label: string;
  value?: string;
  className?: string;
};

export function FavoriteItem({
  icon,
  label,
  value,
  className,
}: FavoriteItemProps) {
  const Icon: LucideIcon = { Utensils, Palette, Quote }[icon];

  if (icon === "Quote") {
    return (
      <div className={cn("flex flex-col items-center text-lg", className)}>
        <Icon className="size-8 mb-4 flex-shrink-0" aria-hidden="true" />
        <span>
          <span className="sr-only">{label}: </span>
          <q>{value}</q>
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center text-lg", className)}>
      <Icon className="h-6 w-6 mr-3 flex-shrink-0" aria-hidden="true" />
      <span>
        <span className="sr-only">{label}: </span>
        {value}
      </span>
    </div>
  );
}
