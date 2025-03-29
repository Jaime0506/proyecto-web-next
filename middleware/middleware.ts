import NextAuth from "next-auth"
import authConfig from "../auth.config"

export const { auth } = NextAuth(authConfig)

// const protectedRoutes = {
//     admin: ["/admin", "/admin/"],
//     coordinator: [],
//     user: [],
// }

// const publicRoutes = ["/login", "/register", "/"]

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}