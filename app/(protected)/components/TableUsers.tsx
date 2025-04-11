'use client'

import { IUser } from "@/types/common";
import { columnsUser } from "@/utils/columnsUser";
import { renderCell } from "@/utils/tableFunctions";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

interface TableUsersProps {
    rows: IUser[]
}

export default function TableUsers({ rows }: TableUsersProps) {
    return (
        <main className="p-2 flex flex-col items-center w-4/5">
            <Table aria-labelledby="table-users">
                <TableHeader columns={columnsUser} className="bg-primary">
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody emptyContent={"No hay usuarios"} items={rows}>
                    {(item) => (
                        <TableRow key={item.nationalId}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </main>
    )
}