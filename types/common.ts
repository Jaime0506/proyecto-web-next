import { DefaultSession } from "next-auth";

// Form Interface Login
export interface ILogin {
    email?: string
    password?: string
}

// Form Interface Register
export interface IRegister extends ILogin {
    firstName?: string;
    lastName?: string;
    cedula?: string;
    password?: string;
    confirmPassword?: string;
}

// Form Validation Interface Login
export type IErrorsLogin = ILogin

// Form Validation Interface Register
export type IErrorsRegister = IRegister

export interface IUser {
    id: string
    nationalId: string
    firstName?: string
    lastName?: string
    email?: string
    role?: string
    status?: boolean
}

export interface ISession {
    user: IUser & DefaultSession["user"]
}

export interface IJWT {
    id: string
    nationalId: string
    firstName?: string
    lastName?: string
    email?: string
    role?: string
    status?: boolean
}

export type IRole = "USER" | "ADMIN" | "COORDINATOR" | undefined 