import Link from 'next/link'

export default function Home() {

    return (
        <div className='flex flex-1 flex-col justify-center items-center'>
            <p>Palabras bonitas de mi aplicacion hecha por Jaime Mejia unicamente</p>
            <Link href='/auth/login'>
                Empieza ahora
            </Link>
        </div>
    )
}
