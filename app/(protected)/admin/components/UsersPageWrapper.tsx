'use client'

import CustomModal from "./modal/CustomModal"
import TableUsers from "./table/TableUsers"
import { useDisclosure } from "@heroui/react"
import type { IUser, KeyOpenModal } from "@/types/common"
import { useState } from "react"

interface UsersPageWrapperProps {
    data: IUser[]
}

export default function UsersPageWrapper({ data }: UsersPageWrapperProps) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [modalContentKey, setModalContentKey] = useState<KeyOpenModal | null>(null);

    const openModal = (key: KeyOpenModal, userId: string) => {
        console.log(key, userId)

        setModalContentKey(key)
        onOpen()
    }

    return (
        <>
            <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} modalContentKey={modalContentKey} />
            <TableUsers rows={data} openModal={openModal} />
        </>
    )
}