import Image from 'next/image';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
    return (
        <main className='flex-1 flex'>
            {/* Sección del formulario */}
            <div className='flex-1 flex items-center justify-center'>
                <RegisterForm />
            </div>

            {/* Sección de la imagen */}
            <div className='flex-1 bg-red-600 flex items-center justify-center'>
                <h2 className="text-white font-bold text-xl">Canvis</h2>
            </div>
        </main>
    );
}

