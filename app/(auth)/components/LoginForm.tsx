'use client'

import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";
import Link from "next/link";

import { loginScheme } from "@/lib/zod";
import { IErrorsLogin } from "@/types/common";
import { loginAction } from "@/actions/authActions";

export default function LoginForm() {

    const [isVisible, setIsVisible] = useState(false);
    const [errors, setErrors] = useState<IErrorsLogin>();

    const toggleIsVisible = () => setIsVisible(prevState => !prevState);

    const onChangeInput = (name: "email" | "password") => {
        if (!(errors?.email || errors?.password)) return

        const updatedErrors = { ...errors }

        if (name === "email") {
            delete updatedErrors?.email
        } else {
            delete updatedErrors?.password
        }

        setErrors(updatedErrors)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Como manejamos las validaciones desde el cliente, no podemos dejar que llegue al servidor
        e.preventDefault()
        let errorsTemp: IErrorsLogin = {}

        const formData = Object.fromEntries(new FormData(e.currentTarget))
        const validation = loginScheme.safeParse(formData)

        if (!validation.success) {
            const fieldErrors: Record<string, string> = {}
            validation.error.errors.forEach(err => {
                fieldErrors[err.path[0]] = err.message
            })

            errorsTemp = fieldErrors
        }

        setErrors(errorsTemp)
        await loginAction(formData)
    }

    return (
        <Form onSubmit={onSubmit} className="flex flex-col gap-7">
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
                    errorMessage={errors?.email}
                    isInvalid={!!errors?.email}
                    onChange={() => onChangeInput("email")}
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
                    errorMessage={errors?.password}
                    isInvalid={!!errors?.password}
                    onChange={() => onChangeInput("password")}
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