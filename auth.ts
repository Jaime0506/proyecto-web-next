import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(prisma),
    callbacks: {
        // Revisar types/next-auth.d.ts para ver como se definen los tipos de las variables

        // jwt() se ejecuta cada vez quie se crea o atualiza un token JWT
        // aca podemos agregar informacion adicional que queramos guardar en el token
        jwt({ token, user }) {
            if (user) {
                token.id = user.id ?? ""
                token.nationalId = user.nationalId ?? "" // Asegurarse de que nationalId sea una cadena
                token.email = user.email ?? ""
                token.firstName = user.firstName
                token.lastName = user.lastName
                token.role = user.role
                token.status = user.status
            }

            return token
        },

        // session() se utiliza para agregar la infroacion del token a la session, ya que a esto
        // es lo que tenemos acceso desde el cliente
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id
                session.user.nationalId = token.nationalId ?? "" // Asegurarse de que nationalId sea una cadena
                session.user.email = token.email ?? ""
                session.user.firstName = token.firstName
                session.user.lastName = token.lastName
                session.user.role = token.role
                session.user.status = token.status
            }

            return session
        }
    },

    session: {
        strategy: "jwt"
    },
})