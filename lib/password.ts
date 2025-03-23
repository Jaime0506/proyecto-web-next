import { compareSync, genSaltSync , hashSync } from "bcrypt-ts"

export const hashPassword = (password: string) => {
    const salt = genSaltSync(10)
    const result = hashSync(password, salt)
    console.log(result)

    return result
}

export const validatePassword = async (password: string, passwordDB: string) => {
    const result = compareSync(password, passwordDB)
    console.log(result)

    return result
}