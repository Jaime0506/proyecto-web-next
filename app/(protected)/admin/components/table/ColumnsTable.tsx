'use client'

import { Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react"
import { Ellipsis, Eye, Mail, Pencil, Trash } from "lucide-react"

export const Email = ({ email }: { email: string }) => (
    <div className="flex flex-row items-center gap-2">
        <Mail size={16} />
        <p className="text-bold text-small">{email}</p>
    </div>
)

export const Role = ({ role }: { role: string }) => (
    <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{role}</p>
    </div>
)

export const Status = ({ status }: { status: boolean }) => (
    <Chip
        className={status ? "border-success-200" : "border-danger-200"}
        color={status ? "success" : "danger"}
        size="sm"
        variant="dot"
    >
        {status ? "Activo" : "Inactivo"}
    </Chip>
)

export const Actions = () => (
    <Dropdown>
        <DropdownTrigger>
            <button>
                <Ellipsis />
            </button>
        </DropdownTrigger>
        <DropdownMenu>
            <DropdownItem
                key="show"
                color="success"
                className="focus:text-white"
                startContent={<Eye size={16} />}
                onPress={() => alert("Alerta")}
            >
                Ver
            </DropdownItem>
            <DropdownItem
                key="edit"
                startContent={<Pencil size={16} />}
            >
                Editar
            </DropdownItem>
            <DropdownItem
                key="delete"
                color="danger"
                className="text-danger"
                startContent={<Trash size={16} />}
            >
                Eliminar
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
)