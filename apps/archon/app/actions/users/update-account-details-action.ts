'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { prisma } from '@dub/prisma-archon'
import { updateAccountSchema } from './schema'

export const updateAccountDetails = authenticatedAction
    .metadata({
        name: 'update-account-details'
    })
    .schema(updateAccountSchema)
    .action(async ({ parsedInput, ctx: { userId } }) => {
        try {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    firstName: parsedInput.firstName,
                    lastName: parsedInput.lastName,
                    role: parsedInput.role,
                    updatedAt: new Date()
                }
            })

            return { success: true }
        } catch (error) {
            return {
                success: false,
                error: 'Failed to update account details'
            }
        }
    })
