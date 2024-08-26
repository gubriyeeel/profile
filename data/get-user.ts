"use server";

import { eq } from "drizzle-orm";

import { database } from "@/database";
import { users } from "@/database/schema";
import { Member } from "@/types/member";

export async function getUser(username: string) {
  const [data]: Member[] = await database
    .select()
    .from(users)
    .where(eq(users.username, username));

  if (!data) {
    throw new Error("User not found! Please check the member username and try again");
  }

  return data;
}
