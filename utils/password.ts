import { compareSync, genSaltSync, hashSync } from "bcrypt-ts";

export const hashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const result = hashSync(password, salt);

    return result;
};

export const validatePassword = async (password: string, passwordDB: string) => {
    const result = compareSync(password, passwordDB);

    return result;
};

export const generateRandomPassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const passwordLength = 12;
    let randomPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }

    const hashedPassword = hashPassword(randomPassword);

    return {
        plainPassword: randomPassword,
        hashedPassword: hashedPassword,
    };
};
