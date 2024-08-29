import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getMember } from "@/data/get-member";
import { FavoriteItem } from "@/components/favorite-item";
import { SocialLinks } from "@/components/social-link";

type MemberPageProps = {
  params: {
    id: string;
  };
};

export default async function MemberPage({ params }: MemberPageProps) {
  const { id } = params;
  const member = await getMember(id);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-[calc(100svh-145px)]">
      <nav className="mb-8">
        <Link
          href="/members"
          className="inline-flex items-center gap-2 text-2xl font-semibold hover:text-primary"
        >
          <ArrowLeft className="h-6 w-6" />
          <span>Members</span>
        </Link>
      </nav>

      <article>
        <header className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-8">
          <Avatar className="h-36 w-36">
            <AvatarImage
              src={member.imageUrls[0]}
              alt={`${member.firstName} ${member.lastName}`}
            />
            <AvatarFallback className="text-4xl">
              {member.nickName}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {`${member.firstName} ${member.lastName}`}{" "}
              <span className="text-muted-foreground">({member.nickName})</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              {member.description}
            </p>
            <div className="flex items-center justify-center sm:justify-start text-lg">
              <MapPin className="h-5 w-5 mr-2" aria-hidden="true" />
              <span>{member.location}</span>
            </div>
          </div>
        </header>

        <Separator className="my-8" />

        <section aria-labelledby="favorites-heading">
          <h2 id="favorites-heading" className="text-2xl font-bold mb-4">
            Favorites
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <FavoriteItem
              icon="Utensils"
              label="Favorite Food"
              value={member.favorite?.food}
            />
            <FavoriteItem
              icon="Palette"
              label="Favorite Color"
              value={member.favorite?.color}
            />
            <FavoriteItem
              icon="Quote"
              label="Favorite Quote"
              value={member.favorite?.quote}
              className="sm:col-span-2"
            />
          </div>
        </section>

        <Separator className="my-8" />

        <section aria-labelledby="socials-heading">
          <h2 id="socials-heading" className="text-2xl font-bold mb-4">
            Socials
          </h2>
          <SocialLinks socials={member.socials} />
        </section>

        <Separator className="my-8" />

        <section aria-labelledby="hobbies-heading">
          <h2 id="hobbies-heading" className="text-2xl font-bold mb-4">
            Hobbies
          </h2>
          <div className="flex flex-wrap gap-2">
            {member.hobbies.map((hobby) => (
              <Badge key={hobby.id} className="pb-1 px-4 text-sm">
                {hobby.name}
              </Badge>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
