import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = await createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // ถ้าพยายามเข้า /dashboard แต่ไม่มี User (ยังไม่ Login) ให้เด้งไปหน้า Login
  // if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // ระบุว่าให้เช็คเฉพาะ Path นี้
};
