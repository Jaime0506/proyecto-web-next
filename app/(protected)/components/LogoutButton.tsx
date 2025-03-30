"use client"

import { logoutAction } from "@/actions/authActions";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function LogoutButton() {

    const router = useRouter()

    const handleOnPress = async () => {
        const respone = await logoutAction()

        if (respone.error) {
            return toast.error(respone.error)
        }

        router.push("login")
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