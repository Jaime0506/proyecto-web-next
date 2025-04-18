'use client'
import { useMemo, useState } from "react";

import { Selection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { renderCell } from "./renderCell";
import { columnsUser } from "@/utils/columnsUser";

import TopContent from "./TopContent";
import BotContent from "./BotContent";

import type { IUser } from "@/types/common";
interface TableUsersProps {
    rows: IUser[]
}

export default function TableUsers({ rows }: TableUsersProps) {

    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const pages = useMemo(() => { 
        return Math.ceil(rows.length / rowsPerPage) 
    }, [rows.length, rowsPerPage])

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = page * rowsPerPage;

        return rows.slice(start, end);
    }, [page, rows, rowsPerPage])

    return (
        <Table
            isHeaderSticky
            aria-labelledby="table-users"
            topContent={<TopContent lenght={rows.length} action={setRowsPerPage} />}
            topContentPlacement="outside"
            bottomContent={<BotContent setPage={setPage} pages={pages} page={page} />}
            bottomContentPlacement="outside"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <TableHeader
                columns={columnsUser}
            >
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody emptyContent={"No hay usuarios"} items={items}>
                {(item) => (
                    <TableRow key={item.nationalId}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}