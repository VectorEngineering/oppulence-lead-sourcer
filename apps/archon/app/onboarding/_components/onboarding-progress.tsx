type OnboardingStep = 'account' | 'workspace' | 'complete'

export function OnboardingProgress({ currentStep }: { currentStep: OnboardingStep }) {
    const steps: { id: OnboardingStep; label: string }[] = [
        { id: 'account', label: 'Account' },
        { id: 'workspace', label: 'Workspace' },
        { id: 'complete', label: 'Complete' }
    ]

    const currentStepIndex = steps.findIndex((step) => step.id === currentStep)
    const progress = ((currentStepIndex + 1) / steps.length) * 100

    return (
        <div className='relative'>
            <div className='bg-muted absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2' />
            <div
                className='bg-primary absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 transition-all duration-300'
                style={{ width: `${progress}%` }}
            />
            <div className='relative flex justify-between'>
                {steps.map((step, index) => (
                    <div key={step.id} className='flex flex-col items-center'>
                        <div className={`z-10 h-4 w-4 rounded-full ${index <= currentStepIndex ? 'bg-primary' : 'bg-muted'}`} />
                        <span className='mt-2 text-xs'>{step.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
