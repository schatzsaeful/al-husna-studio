import { createClient } from "@libsql/client/web";
import { drizzle } from "drizzle-orm/libsql/web";
import * as schema from "./schema";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

const client = url
  ? createClient({
      url,
      authToken: authToken || undefined,
    })
  : null;

export const db = client ? drizzle(client, { schema }) : null;
export { schema };
