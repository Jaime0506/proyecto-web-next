"use client"

import { Button } from "@heroui/react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    const handleOnPress = async () => {
        await signOut()
    }

    return (
        <Button
            onPress={handleOnPress}
            color="danger"
        >
            Cerrar sesión
        </Button>
    )
}