import type { Config } from "drizzle-kit";

const isTurso = Boolean(process.env.TURSO_DATABASE_URL);

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: isTurso ? "turso" : "sqlite",
  dbCredentials: isTurso
    ? {
        url: process.env.TURSO_DATABASE_URL ?? "",
        authToken: process.env.TURSO_AUTH_TOKEN ?? "",
      }
    : {
        url: process.env.DATABASE_URL ?? "./.data/studio.sqlite",
      },
} satisfies Config;
