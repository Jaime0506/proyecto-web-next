// Este componente envuelve todo lo de (user), admin y coordinator

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth()

    // Si no existe sesion, redirigir a la pagina de login
    if (!session) return redirect('login')

    return (
        <>
            {children}
        </>
    )
}