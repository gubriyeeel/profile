import { getMembers } from "@/data/get-members";

import { HoverCard } from "@/components/hover-card";

export default async function MembersPage() {
  const users = await getMembers();
  const reversedUsers = users.reverse();

  return (
    <div className="min-h-[calc(100svh-145px)]">
      <div className="pb-12 sm:pt-4">
        <p className="font-semibold py-2 px-6 border rounded-full shadow-sm w-fit mx-auto">
          Who are we?
        </p>

        <h1 className="text-4xl md:text-6xl leading-snug md:leading-normal mt-2 text-balance text-center">
          Members
        </h1>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {reversedUsers.map(
            ({ firstName, description, imageUrls, id }, index) => {
              return (
                <HoverCard
                  key={index}
                  firstName={firstName}
                  description={description}
                  imageUrl={imageUrls[0]}
                  id={Number(id)}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
