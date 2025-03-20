'use client'

import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => setIsVisible(prevState => !prevState);

    return (
        <Form className="flex flex-col gap-7">
            <section className="flex flex-1 flex-col gap-4 w-full">
                <Input
                    isRequired
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
                        <Mail />
                    }
                />
                <Input
                    isRequired
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
                                <Eye /> :
                                <EyeClosed />}
                        </button>
                    }
                />

                <div className="text-default-500">
                    <p className="inline">¿Aun no tienes una cuenta? </p>
                    <Link href='register' className="border-b-1 text-black border-b-primary font-bold">Registrate</Link>
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
        </Form>
    )
}
