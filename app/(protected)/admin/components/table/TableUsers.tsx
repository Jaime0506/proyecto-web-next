'use client'

import { IUser } from "@/types/common";
import { columnsUser } from "@/utils/columnsUser";

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { renderCell } from "./renderCell";
import TopContent from "./TopContent";
import BotContent from "./BotContent";
// import { useState } from "react";

interface TableUsersProps {
    rows: IUser[]
}

export default function TableUsers({ rows }: TableUsersProps) {
    
    // const itemsPerPage = (rows) => {
    //     const start = (page - 1) * rowPorPage;
    //     const end = start + rowPorPage;
    //     return rows.slice(start, end);
    // }

    return (
        <Table
            isHeaderSticky
            aria-labelledby="table-users"
            selectionMode="multiple"
            // topContent={<TopContent />}
            // topContentPlacement="outside"
            // bottomContent={<BotContent />}
            // bottomContentPlacement="outside"
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