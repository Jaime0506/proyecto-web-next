import { IUser } from "@/types/common"
import { Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react"
import { Ellipsis, Mail } from "lucide-react"

export const renderCell = (user: IUser, columnKey: string) => {
    const cellValue = user[columnKey as keyof IUser]

    if (columnKey === "role") {
        return (
            <div className="flex flex-col">
                <p className="text-bold text-small capitalize">{(cellValue as string)}</p>
            </div>
        )
    }

    if (columnKey === "email") {
        return (
            <div className="flex flex-row items-center gap-2">
                <Mail size={16} />
                <p className="text-bold text-small">{cellValue}</p>
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

    if (columnKey === "actions") {
        return (
            <Dropdown>
                <DropdownTrigger>
                    <button>
                        <Ellipsis />
                    </button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="show" >Ver</DropdownItem>
                    <DropdownItem key="edit" >Editar</DropdownItem>
                    <DropdownItem key="delete" >Eliminar</DropdownItem>
                </DropdownMenu>

            </Dropdown>

        )
    }

    return cellValue
}