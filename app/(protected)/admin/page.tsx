import LogoutButton from "@/app/components/LogoutButton"

export default async function AdminPage() {
    return (
        <div>
            <p>Autenticado:</p>
            <LogoutButton />
        </div>
    )
}
