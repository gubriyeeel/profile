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

  return (
    <div className={`flex items-start text-lg ${className}`}>
      <Icon className="h-6 w-6 mr-3 flex-shrink-0" aria-hidden="true" />
      <span>
        <span className="sr-only">{label}: </span>
        {icon === "Quote" ? <q>{value}</q> : value}
      </span>
    </div>
  );
}