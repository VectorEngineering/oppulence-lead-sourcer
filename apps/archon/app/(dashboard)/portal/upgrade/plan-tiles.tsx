'use client'

import { Check } from 'lucide-react'

import { createCheckoutSession } from '@/app/actions/stripe/create-checkout-session-action'
import { createCustomerPortalSession } from '@/app/actions/stripe/create-customer-portal-session-action'
import { Button } from '@/components/ui/button'
import { STRIPE_PLANS } from '@/lib/constants/stripe'
import { cn } from '@/lib/utils'

interface PlanProps {
    name: string
    description: string
    monthlyPrice: number | 'Contact For Pricing'
    yearlyPrice: number | 'Contact For Pricing'
    monthlyStripePriceId?: string
    yearlyStripePriceId?: string
    stripeProductId?: string
    features?: string[]
}

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const plans: PlanProps[] = [
    {
        name: 'Lite',
        description: 'Perfect for small projects and individual developers.',
        monthlyPrice: 7,
        yearlyPrice: 60,
        stripeProductId: STRIPE_PLANS.lite.productId[ENV],
        monthlyStripePriceId: STRIPE_PLANS.lite.monthlyPriceId[ENV],
        yearlyStripePriceId: STRIPE_PLANS.lite.yearlyPriceId[ENV],
        features: ['1,000 form submissions', 'Unlimited endpoints', 'Unlimited Form Generations', 'Unlimited Webhooks']
    },
    {
        name: 'Pro',
        description: 'Best for growing teams and businesses.',
        monthlyPrice: 20,
        yearlyPrice: 200,
        stripeProductId: STRIPE_PLANS.pro.productId[ENV],
        monthlyStripePriceId: STRIPE_PLANS.pro.monthlyPriceId[ENV],
        yearlyStripePriceId: STRIPE_PLANS.pro.yearlyPriceId[ENV],
        features: ['10,000 form submissions', 'Unlimited endpoints', 'Unlimited Form Generations', 'Unlimited Webhooks']
    },
    {
        name: 'Business',
        description: 'Advanced features for larger organizations.',
        monthlyPrice: 50,
        yearlyPrice: 500,
        stripeProductId: STRIPE_PLANS.business.productId[ENV],
        monthlyStripePriceId: STRIPE_PLANS.business.monthlyPriceId[ENV],
        yearlyStripePriceId: STRIPE_PLANS.business.yearlyPriceId[ENV],
        features: [
            '50,000 form submissions',
            'Unlimited endpoints',
            'Unlimited Form Generations',
            'Unlimited Webhooks',
            'CRM Integrations (Beta)',
            'Slack Support'
        ]
    },
    {
        name: 'Enterprise',
        description: 'Custom solutions for enterprise needs.',
        monthlyPrice: 'Contact For Pricing',
        yearlyPrice: 'Contact For Pricing',
        features: [
            'Unlimited form submissions',
            'Unlimited endpoints',
            'Unlimited Form Generations',
            'Unlimited Webhooks',
            'CRM Integrations (Beta)',
            'Slack Support'
        ]
    }
]

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const PlanTiles = ({ usage }: { usage: any }) => {
    return (
        <section className='grid gap-12'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4'>
                {plans.map((plan) => (
                    <Tile key={plan.name} plan={plan} currentPlan={usage?.plan} />
                ))}
            </div>

            <p className='text-muted-foreground text-center'>
                Current Plan: <span className='text-foreground font-medium uppercase'>{usage?.plan}</span>
            </p>
        </section>
    )
}

const Tile = ({ plan, currentPlan }: { plan: PlanProps; currentPlan?: string }) => {
    const isCurrentPlan = currentPlan?.toLowerCase() === plan.name.toLowerCase()

    return (
        <div
            className={cn(
                'bg-background relative flex flex-col gap-4 rounded-lg border p-6 transition-all',
                isCurrentPlan && 'border-primary bg-primary/5 border-2'
            )}
        >
            {isCurrentPlan && (
                <div className='bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1'>
                    <p className='text-primary-foreground text-xs font-medium'>Current Plan</p>
                </div>
            )}

            <div className='space-y-2'>
                <h3 className='text-xl font-semibold'>{plan.name}</h3>
                <p className='text-muted-foreground text-sm'>{plan.description}</p>
            </div>

            <div className='flex-1 space-y-4'>
                <div className='space-y-2'>
                    {plan.monthlyPrice !== 'Contact For Pricing' ? (
                        <div className='space-y-1'>
                            <p className='text-3xl font-bold'>
                                ${plan.monthlyPrice}
                                <span className='text-muted-foreground text-sm font-normal'>/month</span>
                            </p>
                            <p className='text-muted-foreground text-sm'>
                                ${plan.yearlyPrice}/year
                                {typeof plan.monthlyPrice === 'number' &&
                                    typeof plan.yearlyPrice === 'number' &&
                                    ` (save $${plan.monthlyPrice * 12 - plan.yearlyPrice})`}
                            </p>
                        </div>
                    ) : (
                        <p className='text-xl font-semibold'>{plan.monthlyPrice}</p>
                    )}
                </div>

                <div className='space-y-2'>
                    {plan.features?.map((feature) => (
                        <p className='flex items-center gap-2 text-sm' key={feature}>
                            <Check className='text-primary' size={14} /> {feature}
                        </p>
                    ))}
                </div>
            </div>

            <div className='space-y-2 pt-4'>
                {!isCurrentPlan &&
                    (plan.monthlyPrice !== 'Contact For Pricing' ? (
                        <>
                            <Button
                                onClick={() =>
                                    createCheckoutSession({
                                        // biome-ignore lint/style/noNonNullAssertion: <explanation>
                                        priceId: plan.monthlyStripePriceId!
                                    })
                                }
                                className='w-full'
                            >
                                Purchase Monthly
                            </Button>
                            <Button
                                onClick={() =>
                                    createCheckoutSession({
                                        // biome-ignore lint/style/noNonNullAssertion: <explanation>
                                        priceId: plan.yearlyStripePriceId!
                                    })
                                }
                                className='w-full'
                                variant='outline'
                            >
                                Purchase Yearly
                            </Button>
                        </>
                    ) : (
                        <Button className='w-full'>Contact Sales</Button>
                    ))}
                {isCurrentPlan && (
                    <>
                        <Button variant='outline' className='pointer-events-none w-full cursor-default'>
                            Your Active Plan
                        </Button>
                        <Button variant='secondary' className='w-full' onClick={() => createCustomerPortalSession()}>
                            Manage Your Plan
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}
