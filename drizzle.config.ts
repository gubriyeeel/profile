import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "database/schema.ts",
  dbCredentials: {
    url: "profiles.db",
  },
});
