import Link from "next/link"
import LogoutButton from "./LogoutButton"
import { navItems } from "@/utils/navItems"

import type { IRole } from "@/types/common"

interface NavBarProps {
    role: IRole
}

export default async function NavBar({ role }: NavBarProps) {
    if (!role) return <></>

    return (
        <header>
            <nav className='bg-primary p-3 flex justify-center'>
                <div className='container flex justify-between items-center px-4 py-4'>
                    <Link href="" className='text-white text-2xl font-bold pb-1.5'>Logo</Link>
                    <ul className='flex items-center'>
                        {navItems[role].map((item) => (
                            <li key={item.name}>
                                <Link href={item.path} className='text-white px-4'>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <LogoutButton />
                </div>
            </nav>
        </header>
    )
}