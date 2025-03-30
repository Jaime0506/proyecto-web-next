import LogoutButton from "@/app/(protected)/components/LogoutButton"

export default async function AdminPage() {
    return (
        <div>
            <p>Autenticado:</p>
            <LogoutButton />
        </div>
    )
}
