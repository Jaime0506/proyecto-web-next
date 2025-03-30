import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth()
    
    if (!session) return redirect("login")

    return (
        <>
            {children}
        </>
    )
}