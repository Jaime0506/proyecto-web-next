import TableUsers from "../../components/TableUsers"

export default async function UsersPage() {
    const response = await fetch("http://localhost:3000/api/v1/admin/users")
    const { data, ok } = await response.json()

    console.log(data)

    if (!ok) {
        return (
            <div>
                <h1>Error</h1>
                <p>{data.message}</p>
            </div>
        )
    }

    return (
        <main className="flex flex-col items-center pt-10">
            <TableUsers rows={data}/>
        </main>
    )
}
