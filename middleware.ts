import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { matchesPattern } from "./utils/matchesPattern"

const { auth: middleware } = NextAuth(authConfig)

const protectedRoutes = {
    ADMIN: ["/admin", "/admin/:path*"],
    COORDINATOR: ["/coordinator", "/coordinator/:path*"],
    USER: ["/dashboard", "/dashboard/:path*"],
};

const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/api/v1/admin/(.*)",
];

const defaultRoutes = {
    ADMIN: "/admin",
    COORDINATOR: "/coordinator",
    USER: "/dashboard",
};

export default middleware(async (req) => {
    const { nextUrl, auth } = req;
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    const isLogged = !!auth?.user;
    const role = token?.role as keyof typeof protectedRoutes | undefined;

    if (!role || !isLogged) {
        const isPublicRoute = publicRoutes.some((pattern) => matchesPattern(nextUrl.pathname, pattern));

        // Usuario no autenticado
        if (!isPublicRoute) {
            return NextResponse.redirect(new URL(publicRoutes[1], nextUrl));
        }

        return NextResponse.next();
    }

    const availableRoutes = protectedRoutes[role] || [];
    const isAccessingProtectedRoute = availableRoutes.some((route) =>
        new RegExp(`^${route.replace(/:\w+\*/g, '.*')}$`).test(nextUrl.pathname)
    );

    if (!isAccessingProtectedRoute) {
        // Usuario autenticado intentando acceder a una ruta no permitida
        return NextResponse.redirect(new URL(defaultRoutes[role], nextUrl));
    }

    return NextResponse.next();
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}