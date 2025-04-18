import { Actions, Email, Role, Status } from "./ColumnsTable"

import type { IUser, KeyOpenModal } from "@/types/common"

export const renderCell = (user: IUser, columnKey: string, openModal: (key: KeyOpenModal) => void) => {
    const cellValue = user[columnKey as keyof IUser]

    if (columnKey === "email") return <Email email={cellValue as string} />
    
    if (columnKey === "role") return <Role role={cellValue as string} />

    if (columnKey === "status") return <Status status={cellValue as boolean} />

    if (columnKey === "actions") return <Actions  openModal={openModal}/>

    return cellValue
}