import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  const hoge = request.nextUrl.searchParams.get("hoge");

  return NextResponse.rewrite(new URL(`/test/${query}/${hoge}`, request.nextUrl));
}

export const config = {
  matcher: "/test/:path*",
};
