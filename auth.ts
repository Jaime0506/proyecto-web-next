import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
    callbacks: {
        // Revisar types/next-auth.d.ts para ver como se definen los tipos de las variables
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.firstName = user.firstName
                token.lastName = user.lastName
                token.id = user.id ?? ""
            }

            return token
        },
        
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id
                session.user.role = token.role
                session.user.firstName = token.firstName
                session.user.lastName = token.lastName
            }

            return session
        }
    }
})