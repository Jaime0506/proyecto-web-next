import { prisma } from "@/lib/prisma"

// api/v1/admin/users | GET ALL USERS
export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                nationalId: true,
                firstName: true,
                lastName: true,
                email: true,
                role: true,
                status: true
            }
        })

        return Response.json({
            ok: true,
            data: users
        }, { status: 200 })

    } catch (error) {
        return Response.json({
            ok: false,
            message: error
        }, { status: 500 })
    }
}

// api/v1/admin/users | CREATE USER
export async function POST(req: Request) {
    try {
        const {} = await req.json()


    } catch (error) {
        return Response.json({
            ok: false,
            message: error
        }, { status: 500 })
    }
}