'use server'

import { authenticatedAction } from '@/app/actions/safe-action'
import { prismaEdge } from '@dub/prisma-archon/edge'
import { z } from 'zod'

const createAccountSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters')
})

export const createAccount = authenticatedAction
    .metadata({
        name: 'create-account'
    })
    .schema(createAccountSchema)
    .action(async ({ parsedInput, ctx: { userId, clerkAuthenticatedUser } }) => {
        try {
            console.log('🚀 Creating/updating account for:', {
                userId,
                requestedUsername: parsedInput.username
            })

            // Check if username is already taken by another user
            const existingUser = await prismaEdge.user.findFirst({
                where: {
                    username: parsedInput.username
                }
            })

            console.log('🔍 Existing user check:', { existingUser })

            if (existingUser && existingUser.id !== userId) {
                console.log('⚠️ Username taken by different user:', existingUser.id)
                return {
                    success: false,
                    error: 'Username is already taken'
                }
            }

            // Check if user exists in our database
            const dbUser = await prismaEdge.user.findUnique({
                where: {
                    id: userId
                }
            })

            console.log('👤 Current user in database:', { dbUser })

            if (dbUser) {
                console.log('📝 Updating existing user:', userId)
                // Update existing user
                await prismaEdge.user.update({
                    where: { id: userId },
                    data: {
                        username: parsedInput.username,
                        updatedAt: new Date()
                    }
                })
            } else {
                console.log('✨ Creating new user:', {
                    userId,
                    email: clerkAuthenticatedUser.emailAddresses[0]?.emailAddress
                })
                // Create new user
                const newUser = await prismaEdge.user.create({
                    data: {
                        id: userId,
                        username: parsedInput.username,
                        email: clerkAuthenticatedUser.emailAddresses[0]?.emailAddress || '',
                        name: clerkAuthenticatedUser.firstName || '',
                        firstName: clerkAuthenticatedUser.firstName || '',
                        lastName: clerkAuthenticatedUser.lastName || '',
                        imageUrl: clerkAuthenticatedUser.imageUrl || '',
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                })

                console.log('👤 New user created:', { newUser })
            }

            return { success: true }
        } catch (error) {
            console.error('❌ Error in createAccount:', error)
            return {
                success: false,
                error: 'Failed to create/update account'
            }
        }
    })
