import { IUser } from "@/types/common"
import { Chip } from "@heroui/react"

export const renderCell = (user: IUser, columnKey: string) => {
    const cellValue = user[columnKey as keyof IUser]

    if (columnKey === "role") {
        return (
            <div className="flex flex-col">
                <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
        )
    }

    if (columnKey === "status") {

        return (
            <Chip
                className={user.status ? "border-success-200" : "border-danger-200"}
                color={user.status ? "success" : "danger"}
                size="sm"
                variant="dot"
            >
                {user.status ? "Activo" : "Inactivo"}
            </Chip>
        )
    }

    return cellValue
}