// Form Interface Login
export interface ILogin {
    email?: string
    password?: string
}

// Form Interface Register
export interface IRegister extends ILogin {
    // Aca agrega lo adicional que tiene respecto al ILogin
    rPassword?: string
}

// Form Validation Interface Login
export type IErrorsLogin = ILogin

// Form Validation Interface Register
export type IErrorsRegister = IRegister