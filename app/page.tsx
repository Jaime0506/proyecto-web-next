import Link from 'next/link'

export default function Home() {

    return (
        <div className='flex flex-1 flex-col justify-center items-center gap-4'>
            <p>Palabras bonitas de mi aplicacion hecha por Jaime Mejia unicamente</p>
            <Link href='login' className='p-4 bg-success-500 rounded text-white'>
                Empieza ahora
            </Link>
        </div>
    )
}
