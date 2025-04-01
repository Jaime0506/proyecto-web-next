'use client'
import { IUser } from "@/types/common";
import { columnsUser } from "@/utils/columnsUser";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

interface TableUsersProps {
    rows: IUser[]
}

export default function TableUsers({ rows }: TableUsersProps) {

    const customGetKeyValue = (item: IUser, columnKey: string) => {

        const customItems = {...item}

        if (columnKey === "status") {
            return customItems[columnKey] ? "Activo" : "Inactivo"
        }

        return getKeyValue(customItems, columnKey)
    }
    return (
        <main className="p-2 flex flex-col items-center w-4/5">
            <Table aria-labelledby="table-users">
                <TableHeader columns={columnsUser} className="bg-primary">
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody emptyContent={"No hay usuarios"} items={rows}>
                    {(item) => (
                        <TableRow key={item.nationalId}>
                            {(columnKey) => <TableCell>{customGetKeyValue(item, columnKey as string)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </main>
    )
}
