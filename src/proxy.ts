// Use this file to add route restrictions

import { NextRequest, NextResponse } from "next/server";



// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // Define routes that require authentication
// const protectedRoutes = ['/dashboard', '/profile', '/settings'];

// // Define routes that are for unauthenticated users only
// const authRoutes = ['/', '/login', '/register'];

// export function proxy(request: NextRequest) {
//   // Get the token from cookies (adjust cookie name as needed)
//   const token = request.cookies.get('access_token')?.value;
//   const { pathname } = request.nextUrl;

//   // If trying to access a protected route without a token, redirect to login
//   if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
//     const loginUrl = new URL('/login', request.url);
//     // Optional: preserve the original URL to redirect back after login
//     // loginUrl.searchParams.set('callbackUrl', pathname);
//     return NextResponse.redirect(loginUrl);
//   }

//   // If trying to access auth routes (login/register) while logged in, redirect to dashboard/home
//   if (authRoutes.some((route) => pathname.startsWith(route)) && token) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// // Ensure this file is named `proxy.ts` or `proxy.js` in the root or `src` directory to be active.
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// };

export function proxy(request: NextRequest) {
  return NextResponse.next();
}