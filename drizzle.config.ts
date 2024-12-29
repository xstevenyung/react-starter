import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/schema.ts",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL")!,
  },
});
