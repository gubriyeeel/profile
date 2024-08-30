"use server";

import { database } from "@/database";
import { members } from "@/database/schema";

export async function getMembers() {
  const data = await database.select().from(members);
  
  if (!data) {
    throw new Error("No members found");
  }

  return data;
}
