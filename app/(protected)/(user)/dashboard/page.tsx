import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function UserDashboardPage() {
    const session = await auth()

    if (!session) redirect('login')

    return (
        <div>
            <pre>{JSON.stringify(session, null, 5)}</pre>
        </div>
    )
}