import LogoutButton from "@/app/components/LogoutButton"
import { auth } from "@/auth"

export default async function AdminPage() {
    const session = await auth()

    if (!session) {
        return (
            <>No autenticado</>
        )
    }

    return (
        <div>
            <p>Autenticado:</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>

            <LogoutButton />
        </div>
    )
}
