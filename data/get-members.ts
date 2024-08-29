"use server";

import { database } from "@/database";
import { members } from "@/database/schema";

export async function getMembers() {
  const data = await database.select().from(members);

  const filtered = data.map((member) => {
    return {
      ...member,
      imageUrls: JSON.parse(member.imageUrls),
    };
  });
  
  if (!data) {
    throw new Error("No members found");
  }

  return filtered;
}
