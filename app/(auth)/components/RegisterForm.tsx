'use client'

import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";
import Link from "next/link";
import { registerScheme } from "@/lib/zod";
import { IErrorsRegister } from "@/types/common";

export default function RegisterForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [errors, setErrors] = useState<IErrorsRegister>({});

    const toggleIsVisible = () => setIsVisible(prevState => !prevState);
    const toggleIsConfirmVisible = () => setIsConfirmVisible(prevState => !prevState);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let errorsTemp: IErrorsRegister = {};

        const data = Object.fromEntries(new FormData(e.currentTarget));
        const validation = registerScheme.safeParse(data);

        if (!validation.success) {
            const fieldErrors: Record<string, string> = {};
            validation.error.errors.forEach(err => {
                fieldErrors[err.path[0]] = err.message;
            });

            errorsTemp = fieldErrors;
            setErrors(errorsTemp);
            return;
        }

        setErrors(errorsTemp);
        console.log("Registro exitoso");
    };

    return (
        <Form onSubmit={onSubmit} className="flex flex-col gap-7 w-full">
            <section className="flex flex-1 flex-col gap-4 w-full">
                <Input isRequired type="text" name="firstName" label="Nombres" variant="bordered" radius="none" />
                <Input isRequired type="text" name="lastName" label="Apellidos" variant="bordered" radius="none" />
                <Input isRequired type="text" name="cedula" label="Cédula" variant="bordered" radius="none" />
                <Input 
                    isRequired 
                    type="email" 
                    name="email" 
                    label="Correo Electrónico" 
                    variant="bordered" 
                    radius="none" 
                    endContent={<Mail />} 
                    errorMessage={errors?.email || ""} 
                    isInvalid={!!errors?.email} 
                />
                <Input 
                    isRequired 
                    type={isVisible ? "text" : "password"} 
                    name="password" 
                    label="Contraseña" 
                    variant="bordered" 
                    radius="none" 
                    endContent={
                        <button type="button" onClick={toggleIsVisible} className="flex justify-center items-center">
                            {isVisible ? <Eye /> : <EyeClosed />}
                        </button>
                    }
                    errorMessage={errors?.password || ""} 
                    isInvalid={!!errors?.password} 
                />
                <Input 
                    isRequired 
                    type={isConfirmVisible ? "text" : "password"} 
                    name="confirmPassword" 
                    label="Confirmar Contraseña" 
                    variant="bordered" 
                    radius="none" 
                    endContent={
                        <button type="button" onClick={toggleIsConfirmVisible} className="flex justify-center items-center">
                            {isConfirmVisible ? <Eye /> : <EyeClosed />}
                        </button>
                    }
                    errorMessage={errors?.confirmPassword || ""} 
                    isInvalid={!!errors?.confirmPassword} 
                />
            </section>
            
            <div className="text-default-500">
                <p className="inline">¿Ya tienes una cuenta? </p>
                <Link href='login' className="border-b-1 text-black border-b-primary font-bold">Inicia sesión</Link>
            </div>

            <section className="flex gap-5">
                <Button type="submit" color="primary" radius="none" className="shadow-md w-full">
                    Regístrate
                </Button>
            </section>
        </Form>
    );
}