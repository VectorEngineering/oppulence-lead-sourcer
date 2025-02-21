import { BusinessConfig } from '@dub/platform-config'
import { SignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
    const { userId } = await auth()
    if (userId) redirect('/portal')

    return (
        <section className='bg-background/20 fixed left-0 right-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden backdrop-blur-sm'>
            <div className='mt-12 flex flex-col items-center gap-4 p-6 md:p-12'>
                <SignIn
                    afterSignOutUrl={'/login'}
                    signUpUrl='/sign-up'
                    signUpFallbackRedirectUrl={'/onboarding'}
                    fallbackRedirectUrl={'/onboarding'}
                    forceRedirectUrl={'/onboarding'}
                />
            </div>
            <p className='text-muted-foreground mb-24 mt-4 max-w-xs text-center text-sm'>
                By using {BusinessConfig.name}, you agree to our{' '}
                <a className='underline underline-offset-4' target='_blank' rel='noreferrer' href={BusinessConfig.privacyPolicyUrl}>
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a className='underline underline-offset-4' target='_blank' rel='noreferrer' href={BusinessConfig.termsAndConditionsUrl}>
                    Terms of Service
                </a>
                .
            </p>
        </section>
    )
}
