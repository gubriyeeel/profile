"use server";

import { eq } from "drizzle-orm";

import { database } from "@/database";
import { members, favorites, socials, hobbies } from "@/database/schema";

export async function getMember(id: string) {
  const data = await database
    .select({
      member: members,
      favorite: favorites,
      socials: socials,
      hobbies: hobbies,
    })
    .from(members)
    .innerJoin(favorites, eq(members.id, favorites.memberId))
    .innerJoin(socials, eq(members.id, socials.memberId))
    .innerJoin(hobbies, eq(members.id, hobbies.memberId))
    .where(eq(members.id, id));

  if (data.length === 0) {
    throw new Error("Member not found! Please check the ID and try again");
  }

  const memberData = data[0].member;
  const filtered = {
    ...memberData,
    imageUrls: JSON.parse(memberData.imageUrls),
    favorite: data[0].favorite,
    socials: Array.from(
      new Set(data.map((item) => JSON.stringify(item.socials)))
    ).map((item) => JSON.parse(item)),
    hobbies: Array.from(
      new Set(data.map((item) => JSON.stringify(item.hobbies)))
    ).map((item) => JSON.parse(item)),
  };

  return filtered;
}
