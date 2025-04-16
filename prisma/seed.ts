import { PrismaClient } from "@prisma/client";

import { users } from "../utils/dataSeeder";
import { hashPassword } from "../utils/password";

const prisma = new PrismaClient();

const main = async () => {
    console.log("Iniciando el seeding de la base de datos...");

    // Todos los registros van a tener la misma contraseña
    const passwordHashed = hashPassword("test123456")

    const data = users.map((user) => {
        return {
            nationalId: user.nationalId!,
            firstName: user.firstName!,
            lastName: user.lastName!,
            email: user.email!,
            passwordHash: passwordHashed,
            role: user.role as "USER" | "ADMIN" | "COORDINATOR",
            status: user.status,
        }
    })

    // Poblar la tabla `users` con los datos del archivo `dataSeeder.ts` usando createMany
    await prisma.user.createMany({
        data: data,
        skipDuplicates: true, // Evita errores si ya existen registros con claves únicas duplicadas
    });

    console.log("Seeding completado con éxito.");
}

main()
    .catch((e) => {
        console.error("Error durante el seeding:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });