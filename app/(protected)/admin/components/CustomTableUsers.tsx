'use client'

import { IUser } from "@/types/common";
import { columnsUser } from "@/utils/columnsUser";
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User as UserCustom } from "@heroui/react";
import { useCallback } from "react";

interface CustomTableUsersProps {
    users: IUser[];
}

export default function CustomTableUsers({ users }: CustomTableUsersProps) {
    
    const renderCell = useCallback((user: IUser, columnKey: keyof IUser | string): React.ReactNode => {
        const cellValue = user[columnKey as keyof IUser];

        switch (columnKey) {
            case "name":
                return (
                    <UserCustom
                        description={user.email}
                        name={cellValue as string}
                    >
                        {user.email}
                    </UserCustom>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue as string}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{user.role}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip
                        className="capitalize"
                        size="sm"
                        variant="flat"
                    >
                        {cellValue as string}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="view">View</DropdownItem>
                                <DropdownItem key="edit">Edit</DropdownItem>
                                <DropdownItem key="delete">Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue as React.ReactNode;
        }
    }, []);

    return (
        <Table
            isHeaderSticky
            aria-label="Example table with custom cells, pagination and sorting"
            // bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
                wrapper: "max-h-[382px]",
            }}
            // selectedKeys={selectedKeys}
            selectionMode="multiple"
            // sortDescriptor={sortDescriptor as HeroUISortDescriptor}
            // topContent={topContent}
            topContentPlacement="outside"
            // onSelectionChange={setSelectedKeys}
            // onSortChange={setSortDescriptor as (descriptor: HeroUISortDescriptor) => void}
        >
            <TableHeader columns={columnsUser}>
                {(column) => (
                    <TableColumn
                        key={column.key}
                    >
                        {column.label}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={users}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey as keyof IUser | string)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}