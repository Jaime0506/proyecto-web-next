import './global.css';

import { Providers } from './providers';
// import { NavBar } from './components/NavBar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <main className='flex flex-col min-h-screen'>
                        {/* <NavBar /> */}

                        <div className='flex-1 flex flex-col'>
                            {children}
                        </div>
                    </main>
                </Providers>
            </body>
        </html>
    );
}