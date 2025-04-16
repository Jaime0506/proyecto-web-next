"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/password";
import { registerScheme } from "@/utils/zod";

import type { IRegister, ILogin } from "@/types/common";

// Esta es la funcion que se ejecuta en mi cliente
export const loginAction = async (formData: ILogin) => {
    try {
        // Entra a la funcion de authorize en mi auth.config y se hace la validacion / modificacion en mi base de datos
        await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false
        })

        return { success: true, error: null }

    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message }
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

        return { success: true, error: null }

    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message }
        }

        return { error: "Error 500" }
    }
}

export const registerAction = async (formData: IRegister) => {
    try {
        // Verificar si los campos requeridos están presentes
        const { data, success } = registerScheme.safeParse({ ...formData })

        if (!success) throw ("Los datos ingresados son incorrectos")

        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) throw ("El usuario a registrar ya existe")

        // Hashear la contraseña
        const hashedPassword = hashPassword(formData.password!);

        // Guardar usuario en la base de datos
        await prisma.user.create({
            data: {
                nationalId: formData.cedula!,
                firstName: formData.firstName!,
                lastName: formData.lastName!,
                email: formData.email!,
                passwordHash: hashedPassword,
            },
        });

        await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
        })

        return { success: true, error: null };

    } catch (error) {
        return { success: false, error: error as string};
    }
};