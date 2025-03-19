'use client'

import { Button, Input } from "@heroui/react";

export default function LoginForm() {
    return (
        <main className="flex w-[90%] h-[90%] flex-col">
            <div className="py-20">
                <h2>Inicia sesion para empezar a hacer uso de nuestros servicios</h2>
            </div>

            <div className="flex-1 flex flex-col gap-5">

                <h3>Inicio de sesion</h3>

                <form className="flex flex-col gap-7">
                    <section className="flex flex-1 flex-col gap-4">
                        <Input
                            type="email"
                            name="email"
                            label="Correo electronico"
                            placeholder="Correo electronico"
                        />
                        <Input
                            type="password"
                            name="password"
                            label="Contraseña"
                            placeholder="Contraseña"
                        />
                    </section>

                    <section className="flex gap-5">
                        <Button
                            type="submit"
                            color="primary"
                            radius="none"
                        >
                            Iniciar sesion
                        </Button>

                        <Button
                            className="text-black"
                            color="primary"
                            variant="bordered"
                            radius="none"
                        >
                            Iniciar sesion
                        </Button>
                    </section>
                </form>
            </div>
        </main>
    )
}
