// con esto puedo hacer que las llamadas al servidor funcionen
"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"

import type { ILogin } from "@/types/common"

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
    }
}

export const logoutAction = async () => {
    try {
        await signOut({
            redirect: false
        })
    } catch (error) {
        console.log(error)
    }
}