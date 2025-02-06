'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { logger } from '@/lib/logger'
import { clerkClient } from '@clerk/nextjs/server'
import { updateUserMetadataSchema } from './schema'

export const updateUserMetadata = authenticatedAction
    .metadata({
        name: 'update-user-metadata'
    })
    .schema(updateUserMetadataSchema)
    .action(async ({ parsedInput: { data }, ctx: { userId } }) => {
        try {
            const client = await clerkClient()

            // extract the data from the request
            const { hasProfile, hasWorkspace } = data
            // whatever is false should be removed from the metadata
            // get the old metadata
            const oldMetadata = await client.users.getUser(userId)
            const oldPublicMetadata = oldMetadata.publicMetadata

            // now anything that is new and true should be added to the metadata
            const newPublicMetadata = {
                ...oldPublicMetadata,
                ...data
            }

            // merge the old metadata with the new metadata
            const user = await client.users.updateUser(userId, {
                publicMetadata: newPublicMetadata
            })

            return {
                id: user.id,
                publicMetadata: user.publicMetadata,
                firstName: user.firstName,
                lastName: user.lastName,
                imageUrl: user.imageUrl,
                username: user.username,
                emailAddresses: user.emailAddresses.map((email) => ({
                    id: email.id,
                    emailAddress: email.emailAddress,
                    verified: email.verification?.status === 'verified'
                }))
            }
        } catch (error) {
            logger.error('Failed to update user metadata', {
                error: error instanceof Error ? error : new Error('Unknown error'),
                context: {
                    userId,
                    errorType: error instanceof Error ? error.name : typeof error
                }
            })
            throw error
        }
    })
