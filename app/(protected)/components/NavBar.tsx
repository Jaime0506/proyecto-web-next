import { IRole } from "@/types/common"
import Link from "next/link"
import LogoutButton from "./LogoutButton"

interface NavBarProps {
    role: IRole
}

export const NavBar = ({ role }: NavBarProps) => {
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


const navItems = {
    ADMIN: [
        { name: 'Dashboard', path: '/admin/dashboard' },
        { name: 'Users', path: '/admin/users' },
        { name: 'Settings', path: '/admin/settings' },
    ],
    COORDINATOR: [
        { name: 'Dashboard', path: '/coordinator/dashboard' },
        { name: 'Users', path: '/coordinator/users' },
        { name: 'Settings', path: '/coordinator/settings' },
    ],
    USER: [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Profile', path: '/profile' },
        { name: 'Settings', path: '/settings' },
    ]
}