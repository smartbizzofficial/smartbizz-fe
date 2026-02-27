"use server";

import { ROUTE_PATH } from "@/app/constants/routePath";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  // const supabase = await createClient();
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };
  // const { error } = await supabase.auth.signInWithPassword(data);
  // if (error) {
  //   console.log("error", error);
  //   redirect("/error"); // หรือจะจัดการ error แจ้งเตือนหน้าเว็บก็ได้
  // }
  // revalidatePath("/", "layout");
  redirect(ROUTE_PATH.JOB);
}

export async function signup(formData: FormData) {
  // const supabase = await createClient();
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };
  // const { error } = await supabase.auth.signUp(data);
  // if (error) {
  //   redirect("/error");
  // }
  // revalidatePath("/", "layout");
  // redirect("/dashboard");
}
