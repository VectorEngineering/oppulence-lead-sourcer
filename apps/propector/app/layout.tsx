import './globals.css'

import { AppProviders } from '@/components/providers/AppProviders'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ScrapeFlow',
    description: 'ScrapeFlow'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider
            afterSignOutUrl={'/sign-in'}
            appearance={{
                elements: {
                    formButtonPrimary: 'bg-primary hover:bg-primary/90 text-sm !shadow-none'
                }
            }}
        >
            <html lang='en'>
                <head>
                    <script src='https://unpkg.com/react-scan/dist/auto.global.js' async />
                </head>
                <body className={inter.className}>
                    <AppProviders>{children}</AppProviders>
                </body>
                <Toaster richColors />
            </html>
        </ClerkProvider>
    )
}
