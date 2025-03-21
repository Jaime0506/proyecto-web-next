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
    confirmPassword?: string; 
}

// Form Validation Interface Login
export type IErrorsLogin = ILogin

// Form Validation Interface Register
export type IErrorsRegister = IRegister