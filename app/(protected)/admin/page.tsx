import LogoutButton from "@/app/components/LogoutButton"
import { auth } from "@/auth"
// import { redirect } from "next/navigation"

export default async function AdminPage() {
    const session = await auth()

    if (!session) {
        <div>Emote</div>

        console.log(session)
    }
    return (
        <div>
            <p>Autenticado:</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>

            <LogoutButton />
        </div>
    )
}
