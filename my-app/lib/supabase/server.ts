import { describeEnvFileStatus, ensureEnvLoaded } from "@/lib/env-files";
import { createClient } from "@supabase/supabase-js";

export function createSupabaseAdmin() {
  ensureEnvLoaded();

  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("Supabase env missing. Checked files:", describeEnvFileStatus());
    console.error("Env presence:", {
      SUPABASE_URL: Boolean(url),
      SUPABASE_SECRET_KEY: Boolean(process.env.SUPABASE_SECRET_KEY),
      SUPABASE_SERVICE_ROLE_KEY: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    });
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(url, key);
}
