import Credentials from "next-auth/providers/credentials";

import { loginScheme } from "./lib/zod";
import { prisma } from "./lib/prisma";

import { validatePassword } from "./lib/password";

import type { NextAuthConfig } from "next-auth";
import type { ILogin } from "./types/common";

export default {
    providers: [
        Credentials({
            authorize: async (credentials: ILogin) => {
                const { data, success } = loginScheme.safeParse({ ...credentials })

                // X equis motivo se vulnero el front-end y no llegaron los datos correctamente
                if (!success) throw new Error("Invalid credentials")

                // Verificar si ya existe en la base de datos
                const user = await prisma.user.findUnique({
                    where: {
                        email: data.email,
                    }
                })

                if (!user) throw new Error("Invalid credentials")

                // Validar la contraseña
                const isValid = await validatePassword(data.password, user.passwordHash)

                if(!isValid) throw new Error("Invalid credentials")

                return user
            },
        }),
    ]
} satisfies NextAuthConfig