export const matchesPattern = (pathname: string, pattern: string) => {
    // Escapa las barras y convierte los parámetros tipo :algo* en un wildcard .*
    const regexPattern = `^${pattern.replace(/\//g, '\\/').replace(/:\w+\*/g, '.*')}$`;
    const regex = new RegExp(regexPattern);
    return regex.test(pathname);
}