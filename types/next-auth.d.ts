/* eslint-disable @typescript-eslint/no-empty-object-type */
import "next-auth/jwt";
import type { IJWT, ISession, IUser } from "./common";

declare module "next-auth" {
    interface User extends IUser{} 

    interface Session extends ISession {}
}

declare module "next-auth/jwt" {
    interface JWT extends IJWT{}
}