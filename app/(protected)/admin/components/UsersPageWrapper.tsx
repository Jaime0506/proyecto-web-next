'use client'

import CustomModal from "./modal/CustomModal"
import TableUsers from "./table/TableUsers"
import { useDisclosure } from "@heroui/react"
import type { IUser, KeyOpenModal } from "@/types/common"

interface UsersPageWrapperProps {
    data: IUser[]
}

export default function UsersPageWrapper({ data }: UsersPageWrapperProps) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const openModal = (key: KeyOpenModal) => {
        console.log(key)

        onOpen()
    }

    return (
        <>
            <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} />
            <TableUsers rows={data} openModal={openModal} />
        </>
    )
}