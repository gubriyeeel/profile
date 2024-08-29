import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="flex items-center justify-center">
        <Link
          href={"https://github.com/gubriyeeel"}
          className="text-xs text-muted-foreground uppercase"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
