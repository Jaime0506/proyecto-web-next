import '@/styles/global.css';

import { Providers } from './providers';
import ToastifyProvider from './components/ToastifyProvider';
import { auth } from '@/auth';
import { NavBar } from './(protected)/components/NavBar';
import { IRole } from '@/types/common';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth()
    const role = session?.user?.role as IRole

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <main className='flex flex-col min-h-screen'>
                        <NavBar role={role} />

                        <div className='flex-1 flex flex-col'>
                            {children}
                        </div>
                    </main>
                </Providers>

                <ToastifyProvider />
            </body>
        </html>
    );
}