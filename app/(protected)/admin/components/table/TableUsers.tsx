'use client'

import { IUser } from "@/types/common";
import { columnsUser } from "@/utils/columnsUser";

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { renderCell } from "./renderCell";
import TopContent from "./TopContent";

interface TableUsersProps {
    rows: IUser[]
}

export default function TableUsers({ rows }: TableUsersProps) {
    return (
        <Table
            isHeaderSticky
            aria-labelledby="table-users"
            selectionMode="multiple"
            topContent={<TopContent />}
            topContentPlacement="outside"
        >
            <TableHeader
                columns={columnsUser}
            >
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
    )
}