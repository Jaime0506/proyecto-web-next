'use client'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";

interface CustomModalProps {
    isOpen: boolean
    onOpenChange: () => void
}

export default function CustomModal({ isOpen, onOpenChange }: CustomModalProps) {

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>Titulo</ModalHeader>
                        <ModalBody>
                                <p>Jijija</p>
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