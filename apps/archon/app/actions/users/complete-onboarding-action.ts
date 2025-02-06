'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { prisma } from '@dub/prisma-archon'
import { z } from 'zod'

const completeOnboardingSchema = z.object({
    onboardingComplete: z.boolean()
})

export const completeOnboarding = authenticatedAction
    .metadata({
        name: 'complete-onboarding'
    })
    .schema(completeOnboardingSchema)
    .action(async ({ parsedInput, ctx: { userId } }) => {
        try {
            const user = await prisma.user.update({
                where: { id: userId },
                data: { onboardingComplete: parsedInput.onboardingComplete }
            })

            console.log('🎯 Onboarding complete', { user })
            return { success: true, user }
        } catch (error) {
            return { success: false, error: 'Failed to complete onboarding' }
        }
    })
