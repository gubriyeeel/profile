import Link from "next/link";
import { Facebook, Instagram, GithubIcon, Twitter } from "lucide-react";

type Social = {
  id: string;
  name: string;
  url: string;
};

type SocialLinksProps = {
  socials: Social[];
};

const socialIcons = {
  Instagram,
  Facebook,
  GitHub: GithubIcon,
  Twitter,
};

export function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="flex gap-4 items-center">
      {socials.map(({ id, name, url }) => {
        const Icon = socialIcons[name as keyof typeof socialIcons];
        return (
          <Link
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label={`${name} profile`}
          >
            {Icon && <Icon className="h-6 w-6" />}
          </Link>
        );
      })}
    </div>
  );
}