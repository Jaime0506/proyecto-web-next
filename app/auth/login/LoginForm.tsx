'use client'

import { Button, Input } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => setIsVisible(prevState => !prevState);

    return (
        <main className="flex w-[90%] h-[90%] flex-col">
            <div className="py-20">
            </div>

            <div className="flex-1 flex flex-col gap-5">
                <h2>Inicia sesion para empezar a hacer uso de nuestros servicios</h2>

                <form className="flex flex-col gap-7">
                    <section className="flex flex-1 flex-col gap-4">
                        <Input
                            type="email"
                            name="email"
                            label="Correo electronico"
                            variant="bordered"
                            radius="none"
                            classNames={{
                                inputWrapper: [
                                    "group-data-[focus=true]:border-primary",
                                ]
                            }}
                            endContent={
                                <Mail className="text-default-400" />
                            }
                        />
                        <Input
                            type={isVisible ? "text" : "password"}
                            name="password"
                            label="Contraseña"
                            variant="bordered"
                            radius="none"
                            classNames={{
                                inputWrapper: [
                                    "group-data-[focus=true]:border-primary",
                                ]
                            }}
                            endContent={
                                <button type="button" onClick={toggleIsVisible} className="flex justify-center items-center">
                                    {isVisible ?
                                        <Eye className="text-default-400" /> :
                                        <EyeClosed className="text-default-400" />}
                                </button>
                            }
                        />

                        <div>
                            <p className="inline">¿Aun no tienes una cuenta? </p>
                            <Link href='register' className="border-b-1 border-b-primary">Registrate</Link>
                        </div>
                    </section>

                    <section className="flex gap-5">
                        <Button
                            type="submit"
                            color="primary"
                            radius="none"
                            className="shadow-md"
                        >
                            Iniciar sesion
                        </Button>
                    </section>
                </form>
            </div>
        </main>
    )
}
