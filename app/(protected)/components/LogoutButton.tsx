"use client"

import { logoutAction } from "@/actions/authActions";
import { LogOut } from "lucide-react";
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
        <button onClick={handleOnPress} className="bg-white flex w-8 h-8 items-center justify-center rounded-full hover:scale-110 transition-all">
            <LogOut className="text-primary" size={18} />
        </button>
    )
}