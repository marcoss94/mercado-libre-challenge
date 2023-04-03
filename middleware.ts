import { NextRequest, NextResponse } from "next/server";
import { Routes } from "./models";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith(Routes.HOME.path)) {
    return NextResponse.rewrite(new URL(Routes.ITEMS.path, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
