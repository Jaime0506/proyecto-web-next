'use client';

import { Button, Form, Input } from "@heroui/react";
import React, { useState, useRef } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";
import Link from "next/link";
import { registerScheme } from "@/lib/zod";
import { IErrorsRegister, IRegister } from "@/types/common";
import { registerAction } from "@/actions/authActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterForm() {

    const router = useRouter();

    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [errors, setErrors] = useState<IErrorsRegister>({});
    
    const formRef = useRef<HTMLFormElement>(null); // Agregamos referencia al formulario

    const toggleIsVisible = () => setIsVisible(prev => !prev);
    const toggleIsConfirmVisible = () => setIsConfirmVisible(prev => !prev);

    const onChangeInput = (name: keyof IErrorsRegister) => {
        if (errors[name]) {
            setErrors(prevErrors => {
                const updatedErrors = { ...prevErrors };
                delete updatedErrors[name];
                return updatedErrors;
            });
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget)) as IRegister;

        // Validar los datos con Zod
        const validation = registerScheme.safeParse(formData);

        if (!validation.success) {
            const fieldErrors: IErrorsRegister = {};
            validation.error.errors.forEach(err => {
                fieldErrors[err.path[0] as keyof IErrorsRegister] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        // Llamar a registerAction para registrar al usuario
        const { error } = await registerAction(validation.data);

        if (error) return toast.error(error) 
        
        router.push("dashboard")
    };

    return (
        <Form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-7">
            <section className="flex flex-1 flex-col gap-4 w-full">
                <Input
                    isRequired
                    type="text"
                    name="firstName"
                    label="Nombres"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: ["group-data-[focus=true]:border-primary"] }}
                    errorMessage={errors?.firstName}
                    isInvalid={!!errors?.firstName}
                    onChange={() => onChangeInput("firstName")}
                />
                <Input
                    isRequired
                    type="text"
                    name="lastName"
                    label="Apellidos"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: ["group-data-[focus=true]:border-primary"] }}
                    errorMessage={errors?.lastName}
                    isInvalid={!!errors?.lastName}
                    onChange={() => onChangeInput("lastName")}
                />
                <Input
                    isRequired
                    type="number"
                    name="cedula"
                    label="Cédula"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: ["group-data-[focus=true]:border-primary"] }}
                    errorMessage={errors?.cedula}
                    isInvalid={!!errors?.cedula}
                    onChange={() => onChangeInput("cedula")}
                />
                <Input
                    isRequired
                    type="email"
                    name="email"
                    label="Correo Electrónico"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: ["group-data-[focus=true]:border-primary"] }}
                    endContent={<Mail />}
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
                    classNames={{ inputWrapper: ["group-data-[focus=true]:border-primary"] }}
                    endContent={
                        <button type="button" onClick={toggleIsVisible} className="flex justify-center items-center">
                            {isVisible ? <Eye /> : <EyeClosed />}
                        </button>
                    }
                    errorMessage={errors?.password}
                    isInvalid={!!errors?.password}
                    onChange={() => onChangeInput("password")}
                />
                <Input
                    isRequired
                    type={isConfirmVisible ? "text" : "password"}
                    name="confirmPassword"
                    label="Confirmar Contraseña"
                    variant="bordered"
                    radius="none"
                    classNames={{ inputWrapper: ["group-data-[focus=true]:border-primary"] }}
                    endContent={
                        <button type="button" onClick={toggleIsConfirmVisible} className="flex justify-center items-center">
                            {isConfirmVisible ? <Eye /> : <EyeClosed />}
                        </button>
                    }
                    errorMessage={errors?.confirmPassword}
                    isInvalid={!!errors?.confirmPassword}
                    onChange={() => onChangeInput("confirmPassword")}
                />
            </section>

            <div className="text-default-500">
                <p className="inline">¿Ya tienes una cuenta? </p>
                <Link href="login" className="border-b-1 text-black border-b-primary font-bold">Inicia sesión</Link>
            </div>

            <section className="flex gap-5">
                <Button type="submit" color="primary" radius="none" className="shadow-md">
                    Registrarse
                </Button>
            </section>
        </Form>
    );
}
