import { object, string } from "zod";

export const loginScheme = object({
        email: string({ required_error: "El email es requerido" })
                .min(1, "El email es requerido")
                .email("El email es invalido"),
        password: string({ required_error: "La contraseña es requerida" })
                .min(1, "La contraseña es requerida")
                .min(8, "La contraseña debe tener mas de 8 caracteres")
})

export const registerScheme = object({
    firstName: string()
        .trim()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Solo se permiten letras y espacios"),
    lastName: string()
        .trim()
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Solo se permiten letras y espacios"),
    cedula: string()
        .trim()
        .regex(/^\d+$/, "La cédula solo debe contener números"),
    email: string()
        .trim()
        .email("Correo electrónico inválido"),
    password: string()
        .trim()
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: string()
        .trim()
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});