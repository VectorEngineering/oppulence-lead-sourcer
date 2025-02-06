'use client'

import { Separator } from '@/components/ui/separator'
import { SignIn } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'

export default function MagicLinkForm() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams?.get('callbackUrl') || '/'

    return (
        <>
            <div className='mt-4 w-full'>
                <Separator className='my-4' />
                <SignIn
                    routing='hash'
                    afterSignInUrl={callbackUrl}
                    appearance={{
                        elements: {
                            rootBox: 'flex items-center justify-center w-full'
                        }
                    }}
                />
            </div>
        </>
    )
}
