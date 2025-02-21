'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { CreateAccount } from './_components/create-account'
import { CreateWorkspace } from './_components/create-workspace'
import { InviteMembers } from './_components/invite-members'
import { Progress } from '@/components/ui/progress'
import { WelcomeScreen } from './_components/welcome-screen'
import { completeOnboarding } from '@/app/actions/users/complete-onboarding-action'
import { toast } from 'sonner'
import { updateUserMetadata } from '@/app/actions/users/update-user-metadata-action'
import { useAction } from 'next-safe-action/hooks'

const STEPS = [
    {
        title: 'Welcome',
        description: 'Welcome to Oppulence (Lead Sourcing)',
        param: 'welcome'
    },
    {
        title: 'Create Account',
        description: 'Set up your personal account',
        param: 'account'
    },
    {
        title: 'Create Workspace',
        description: 'Create a space for your team',
        param: 'workspace'
    },
    { title: 'Invite Team', description: 'Get your team onboard', param: 'team' }
] as const

type StepParam = (typeof STEPS)[number]['param']

export default function OnboardingPageClient() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [workspaceId, setWorkspaceId] = useState<string>('')

    // Determine current step based on URL params
    const currentParam = searchParams.get('step') as StepParam | null
    const [step, setStep] = useState(() => {
        if (!currentParam) return 1
        const stepIndex = STEPS.findIndex((s) => s.param === currentParam)
        return stepIndex > -1 ? stepIndex + 1 : 1
    })

    const { execute: executeUpdateMetadata } = useAction(updateUserMetadata)
    const { execute: executeCompleteOnboarding } = useAction(completeOnboarding, {
        onSuccess: async (result) => {
            if (result.data?.user) {
                await executeUpdateMetadata({
                    data: { onboardingComplete: true }
                })
                console.log('🎯 Onboarding complete, redirecting to dashboard')
                router.push('/portal')
            }
        },
        onError: (error) => {
            console.error('Onboarding completion error:', error)
            toast.error('Failed to complete onboarding. Please try again.')
        }
    })

    // Update URL when step changes
    useEffect(() => {
        const newParam = STEPS[step - 1].param
        const newUrl = `/onboarding?step=${newParam}`
        router.replace(newUrl)
    }, [step, router])

    // Ensure workspace ID is present for team invites
    useEffect(() => {
        if (step === 3 && !workspaceId) {
            setStep(2)
            router.replace('/onboarding?step=workspace')
        }
    }, [step, workspaceId, router])

    const handleComplete = async () => {
        try {
            await executeCompleteOnboarding({ onboardingComplete: true })
        } catch (error) {
            console.error('Onboarding completion error:', error)
            toast.error('Failed to complete onboarding. Please try again.')
        }
    }

    const progress = ((step - 1) / (STEPS.length - 1)) * 100

    const goToNextStep = (stepData?: { workspaceId?: string }) => {
        if (stepData?.workspaceId) {
            setWorkspaceId(stepData.workspaceId)
        }
        setStep((prev) => Math.min(prev + 1, STEPS.length))
    }

    return (
        <div className='flex min-h-screen flex-col items-center justify-center p-4'>
            <div className='mx-auto w-full max-w-4xl space-y-8'>
                {/* Progress indicator - only show for steps after welcome */}
                {step > 1 && (
                    <div className='space-y-2'>
                        <div className='text-muted-foreground flex justify-between text-sm'>
                            <span>
                                Step {step - 1} of {STEPS.length - 1}
                            </span>
                            <span>{STEPS[step - 1].title}</span>
                        </div>
                        <Progress value={progress} className='h-1' />
                    </div>
                )}

                {/* Step content */}
                <div className='w-full'>
                    {step === 1 && <WelcomeScreen onComplete={() => goToNextStep()} />}
                    {step === 2 && <CreateAccount onComplete={() => goToNextStep()} />}
                    {step === 3 && (
                        <CreateWorkspace
                            onComplete={(id: string) => {
                                if (!id) {
                                    toast.error('No workspace ID received')
                                    return
                                }
                                goToNextStep({ workspaceId: id })
                            }}
                        />
                    )}
                    {step === 4 && workspaceId && <InviteMembers workspaceId={workspaceId} onComplete={handleComplete} />}
                </div>

                {/* Step description - only show for steps after welcome */}
                {step > 1 && (
                    <div className='text-muted-foreground text-center text-sm'>
                        <p>{STEPS[step - 1].description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
