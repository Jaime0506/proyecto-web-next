'use client'

import { Button, Input } from "@heroui/react";
import { Search } from "lucide-react";

interface TopContentProps {
    lenght?: number
}

export default function TopContent({ lenght }: TopContentProps) {
    return (
        <div className="flex flex-row items-center gap-4">
            <Input
                placeholder="Buscar"
                startContent={<Search size={16} />}
            />

            <Button
                color="primary"
                radius="sm"
            >
                Crear usuario
            </Button>

            { lenght && <>{lenght}</>}
        </div>
    )
}
