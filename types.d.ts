declare module "next-auth" {
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */

    // Todos mis campos perzonalizados deben ser ?, ya que no estan definidor x defecto en el Adapter
    interface User {
        id: string
        nationalId?: string
        firstName?: string
        lastName?: string
        email: string
        role?: string
        status?: boolean
    }

    /**
     * Returned by `useSession`, `auth`, contains information about the active session.
     */
    interface Session {
        user: {
            id: string
            nationalId?: string
            firstName?: string
            lastName?: string
            email: string
            role?: string
            status?: boolean
        } & DefaultSession["user"]
    }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        id: string
        nationalId?: string
        firstName?: string
        lastName?: string
        email: string
        role?: string
        status?: boolean
    }
}