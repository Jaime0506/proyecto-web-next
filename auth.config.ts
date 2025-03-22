import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import type { ILogin } from "./types/common";

export default {
    providers: [
        Credentials({
            authorize: async (credentials: ILogin) => {
                // LLegan los datos que pase desde mi authActions
                console.log({ credentials })

                if (credentials.email !== "test@gmail.com") {
                    throw new Error("Credentials invalid")
                }


                return {
                    id: "1",
                    name: "Test user",
                    email: "test@gmail.com"
                }
            },
        }),
    ]
} satisfies NextAuthConfig