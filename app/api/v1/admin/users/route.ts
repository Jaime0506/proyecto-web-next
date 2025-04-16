import { prisma } from "@/lib/prisma";
import { generateRandomPassword } from "@/utils/password";

import type { ApiResponse, IUser } from "@/types/common";

// api/v1/admin/users | GET ALL USERS
export async function GET(): Promise<Response> {
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
        });

        const responseBody: ApiResponse<IUser[]> = {
            ok: true,
            data: users,
        };

        return Response.json(responseBody, { status: 200 });

    } catch (error) {

        const responseBody: ApiResponse<null> = {
            ok: false,
            error: {
                message: error instanceof Error ? error.message : "Error al obtener los usuarios",
            }
        };

        return Response.json(responseBody, { status: 500 });
    }
}

// api/v1/admin/users | CREATE USER
export async function POST(req: Request): Promise<Response> {
    try {
        const body = await req.json();
        const { nationalId, firstName, lastName, email, role } = body;

        // Generar contraseña aleatoria si no se proporciona
        const { plainPassword, hashedPassword } = generateRandomPassword();

        // Crear el usuario en la base de datos
        const newUser = await prisma.user.create({
            data: {
                nationalId,
                firstName,
                lastName,
                email,
                passwordHash: hashedPassword,
                role,
                status: true, // Puedes ajustar el estado inicial según sea necesario
            },
        });

        if (!newUser) throw new Error("Error al crear el usuario");

        // Construir el objeto de respuesta sin incluir passwordHash
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { passwordHash, ...userWithoutPasswordHash } = newUser;

        // Retornar la respuesta con la contraseña en texto plano y los datos del usuario
        const responseBody: ApiResponse<{ user: IUser; plainPassword: string }> = {
            ok: true,
            data: {
                user: userWithoutPasswordHash,
                plainPassword,
            },
        };

        return Response.json(responseBody, { status: 201 });
    } catch (error) {
        return Response.json(
            {
                ok: false,
                message: error instanceof Error ? error.message : "Error al crear el usuario",
            },
            { status: 500 }
        );
    }
}