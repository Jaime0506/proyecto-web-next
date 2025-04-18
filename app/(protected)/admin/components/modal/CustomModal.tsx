'use client'

import type { KeyOpenModal } from "@/types/common";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
import { useMemo } from "react";

interface CustomModalProps {
    isOpen: boolean
    onOpenChange: () => void
    modalContentKey: KeyOpenModal | null
}

export default function CustomModal({ isOpen, onOpenChange, modalContentKey }: CustomModalProps) {

    const contentToRender = useMemo(() => {
        if (!modalContentKey) return <>No hay contenido</>

        if (modalContentKey === "show") {
            return (
                <div className="flex flex-col gap-4">
                    <h1>Show</h1>
                    <p>contenido del show</p>
                </div>
            )
        }

        if (modalContentKey === "edit") {
            return (
                <div className="flex flex-col gap-4">
                    <h1>Edit</h1>
                    <p>contenido del edit</p>
                </div>
            )
        }

        if (modalContentKey === "delete") {
            return (
                <div className="flex flex-col gap-4">
                    <h1>Delete</h1>
                    <p>contenido del delete</p>
                </div>
            )
        }
    }, [modalContentKey])

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>Titulo</ModalHeader>
                        <ModalBody>
                            {contentToRender}
                        </ModalBody>
                        <ModalFooter>
                            <Button className="btn btn-primary" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}