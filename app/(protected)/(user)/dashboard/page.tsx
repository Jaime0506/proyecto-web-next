import { auth } from "@/auth"
import { redirect } from "next/navigation"
import LogoutButton from "../../components/LogoutButton"

export default async function UserPage() {
    const session = await auth()

    if (!session) redirect('login')

    return (
        <div>
            <pre>{JSON.stringify(session, null, 5)}</pre>

            <LogoutButton />
        </div>
    )
}