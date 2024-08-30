"use server";

import { eq } from "drizzle-orm";

import { database } from "@/database";
import {
  members,
  favorites,
  socials,
  memberHobbies,
  hobbies,
} from "@/database/schema";

export async function getMember(id: string) {
  const data = await database
    .select({
      member: members,
      favorite: favorites,
      socials: socials,
      hobby: hobbies,
    })
    .from(members)
    .leftJoin(favorites, eq(members.id, favorites.memberId))
    .leftJoin(socials, eq(members.id, socials.memberId))
    .leftJoin(memberHobbies, eq(members.id, memberHobbies.memberId))
    .leftJoin(hobbies, eq(memberHobbies.hobbyId, hobbies.id))
    .where(eq(members.id, id));

  if (data.length === 0) {
    throw new Error("Member not found! Please check the ID and try again");
  }

  const memberData = data[0].member;
  const filtered = {
    ...memberData,
    imageUrls: memberData.imageUrls, // Remove JSON.parse
    favorite: data[0].favorite,
    socials: Array.from(
      new Set(data.map((item) => JSON.stringify(item.socials)))
    ).map((item) => JSON.parse(item)),
    hobbies: Array.from(
      new Set(
        data
          .filter((item) => item.hobby)
          .map((item) => JSON.stringify(item.hobby))
      )
    ).map((item) => JSON.parse(item)),
  };

  return filtered;
}
