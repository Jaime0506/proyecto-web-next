'use client'

import { Button, Input } from "@heroui/react";
import { Search } from "lucide-react";

import type { Dispatch, SetStateAction } from "react";
interface TopContentProps {
    lenght?: number
    action: Dispatch<SetStateAction<number>>
}

export default function TopContent({ lenght, action }: TopContentProps) {

    const onRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        
        action(Number(value))
    }

    return (
        <main className="flex flex-col gap-2">
            <section className="flex flex-row items-center gap-4">
                <Input
                    placeholder="Buscar"
                    radius="sm"
                    startContent={<Search size={16} />}
                />

                <Button
                    color="primary"
                    radius="sm"
                >
                    Crear usuario
                </Button>

            </section>

            <section className="flex justify-between flex-row text-sm text-default-500">
                <span>Total {lenght} usuarios</span>

                <label>
                    Usuarios por página:

                    <select
                        className="bg-transparent outline-none text-default-400 text-small"
                        onChange={onRowsPerPageChange}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
            </section>
        </main>
    )
}
