"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/database";

export async function getCategories() {
  const client = createClient<Database>();
  return (await client).from("categories").select("*");
}
