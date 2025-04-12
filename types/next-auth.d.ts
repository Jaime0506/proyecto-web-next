import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        id: string
        nationalId: string
        firstName?: string
        lastName?: string
        email?: string
        role?: string
        status?: boolean
    }

    interface Session {
        user: User & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        nationalId: string
        firstName?: string
        lastName?: string
        email?: string
        role?: string
        status?: boolean
    }
}