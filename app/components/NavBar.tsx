import Link from "next/link"

export const NavBar = () => {
    return (
        <header>
            <nav className='bg-red-500'>
                <div className='container mx-auto flex justify-between items-center px-4 py-4'>
                    <a href='#' className='text-white text-2xl font-bold'>Logo</a>
                    <ul className='flex'>
                        <li>
                            <Link href='/' className='text-white px-4'>Home</Link>
                        </li>
                        <li>
                            <Link href='/auth/login' className='text-white px-4'>Login</Link>
                        </li>
                        <li>
                            <Link href='/auth/register' className='text-white px-4'>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}