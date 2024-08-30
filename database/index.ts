import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("profiles.db", { readonly: true });
export const database = drizzle(sqlite);
