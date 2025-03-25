"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/database";

export async function signIn(email: string, password: string) {
  const client = await createClient<Database>();
  return client.auth.signInWithPassword({
    email: email,
    password: password,
  });
}
