"use server";

import { eq } from "drizzle-orm";

import { database } from "@/database";
import { members } from "@/database/schema";
import { Member } from "@/types/member";

export async function getMember(id: string) {
  const [data]: Member[] = await database
    .select()
    .from(members)
    .where(eq(members.id, id));

  if (!data) {
    throw new Error("Member not found! Please check the ID and try again");
  }

  return data;
}
