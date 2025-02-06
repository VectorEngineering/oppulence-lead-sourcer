import { SignUp } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function SignUpPage() {
    const { userId } = await auth()
    if (userId) redirect('/onboarding')

    return (
        <section className='bg-background/20 fixed left-0 right-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden backdrop-blur-sm'>
            <div className='bg-muted mt-12 flex flex-col items-center gap-4 rounded-lg border p-6 shadow-sm md:p-12'>
                <SignUp
                    fallbackRedirectUrl='/onboarding'
                    signInForceRedirectUrl='/onboarding'
                    forceRedirectUrl='/onboarding'
                    signInUrl='/login'
                    appearance={{
                        elements: {
                            rootBox: 'w-full',
                            card: 'w-full'
                        }
                    }}
                />
            </div>
        </section>
    )
}
