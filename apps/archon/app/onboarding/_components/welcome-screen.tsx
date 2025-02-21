import { Button } from '@/components/ui/button'

interface WelcomeScreenProps {
    onComplete: () => void
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    return (
        <div className='flex flex-col items-center justify-center space-y-8 text-center'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold tracking-tight'>Welcome to Oppulence (Lead Sourcing)</h1>
                <p className='text-muted-foreground text-lg'>
                    Let&apos;s get you set up with everything you need to manage your leads effectively.
                </p>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <Button size='lg' onClick={onComplete}>
                    Set up your account
                </Button>
                <p className='text-muted-foreground text-sm'>Quick and easy - takes only 50 seconds</p>
            </div>
        </div>
    )
}
