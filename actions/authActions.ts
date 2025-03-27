// con esto puedo hacer que las llamadas al servidor funcionen
"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"
import { prisma } from "@/lib/prisma";
import type { IRegister } from "@/types/common";
import type { ILogin } from "@/types/common"
import { hashPassword } from "@/lib/password";

// Esta es la funcion que se ejecuta en mi cliente
export const loginAction = async (formData: ILogin) => {
    try {
        // Entra a la funcion de authorize en mi auth.config y se hace la validacion / modificacion en mi base de datos
        await signIn("credentials", { 
            email: formData.email,
            password: formData.password,
            redirect: false
        })
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message}
        }

        return { error: "Error 500" }
    }
}

export const logoutAction = async () => {
    try {
        await signOut({
            // redirectTo: 'login',
            redirect: false
        })
    } catch (error) {
        console.log(error)
    }
}

export const registerAction = async (formData: IRegister) => {
    try {
        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email: formData.email },
        });

        if (existingUser) {
            return { error: "El correo electrónico ya está registrado" };
        }

        // Hashear la contraseña
        const hashedPassword = hashPassword(formData.password!);

        // Guardar usuario en la base de datos
        await prisma.user.create({
            data: {
                id: formData.cedula!,
                firstName: formData.firstName!,
                lastName: formData.lastName!,
                email: formData.email!,
                passwordHash: hashedPassword,
            },
        });

        return { success: "Registro exitoso" };
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        return { error: "Error al registrar usuario" };
    }
};
