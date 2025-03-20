'use client'

import { Button, Input } from "@heroui/react";

export default function RegisterForm() {
    return (
        <main className="flex w-[90%] h-[90%] flex-col">
            <div className="py-10">
                <h2 className="text-2xl font-bold">Crea Tu Cuenta</h2>
                <p className="text-gray-500">¡Bienvenido! ahora puedes crear tu cuenta</p>
            </div>

            <div className="flex-1 flex flex-col gap-5">
                <form className="flex flex-col gap-7">
                    <section className="flex flex-1 flex-col gap-4">
                        <Input type="text" name="firstName" label="Nombres" placeholder="Nombres" />
                        <Input type="text" name="lastName" label="Apellidos" placeholder="Apellidos" />
                        <Input type="email" name="email" label="Correo Electrónico" placeholder="Correo Electrónico" />
                        <Input type="password" name="password" label="Contraseña" placeholder="Contraseña" />
                        <Input type="password" name="confirmPassword" label="Confirmar Contraseña" placeholder="Confirmar Contraseña" />
                    </section>

                    <Button type="submit" color="primary" radius="none" className="w-full">
                        Regístrate
                    </Button>
                </form>
            </div>
        </main>
    );
}
