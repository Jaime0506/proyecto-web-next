import Logo from '@/public/assets/login/login.svg'
import Image from 'next/image'
import LoginForm from './LoginForm'

export default function LoginPage() {
    return (
        <main className='flex-1 flex'>
            {/* Image section */}
            <div className='flex-1 flex bg-white items-center justify-center'>
                <LoginForm />
            </div>

            {/* Form section */}
            <div className='flex-1 bg-primary flex items-center justify-center'>
                <Image src={Logo} alt='logo'/>
            </div>
        </main>
    )
} 