'use server'

import { type User, auth } from '@clerk/nextjs/server'

import { clerkClient } from '@clerk/nextjs/server'
import { prismaEdge } from '@dub/prisma-archon/edge'
import { unstable_cache } from 'next/cache'
import { logger } from '../logger/logger'
import { revalidateKeys } from '../types/revalidate-keys'

// Get user data without caching the auth check
async function getUserData(userId: string) {
    try {
        const client = await clerkClient()
        return await client.users.getUser(userId)
    } catch (error) {
        logger.error('Failed to get user data', {
            source: 'AuthService',
            error: error instanceof Error ? error : new Error('Unknown error'),
            context: { userId }
        })
        return null
    }
}

// Cache the user data fetch, not the auth check
const getCachedUserData = unstable_cache(async (userId: string) => getUserData(userId), [revalidateKeys.userData], {
    revalidate: 60,
    tags: [revalidateKeys.userData]
})

/**
 * Retrieves the current authenticated user's details from Clerk
 *
 * This function performs the following:
 * 1. Checks for an active authentication session
 * 2. Retrieves the user ID from the session
 * 3. Fetches complete user details from Clerk if authenticated
 *
 * @example
 * ```ts
 * const user = await getCurrentUser();
 * if (user) {
 *   console.log(user.emailAddresses[0]?.emailAddress);
 * }
 * ```
 *
 * @returns {Promise<User | null>}
 * - Returns the Clerk User object if authentication is successful
 * - Returns null if:
 *   - No active session exists
 *   - No user ID is found
 *   - An error occurs during the process
 *
 * @throws {Error} The function handles all errors internally and returns null instead of throwing
 */
export async function getCurrentUser() {
    try {
        // Do auth check outside of cache
        const session = await auth()
        const userId = session?.userId

        if (!userId) {
            return null
        }

        // Use cached data fetch
        return await getCachedUserData(userId)
    } catch (error) {
        logger.error('Failed to get current auth user', {
            source: 'AuthService',
            error: error instanceof Error ? error : new Error('Unknown error'),
            context: {
                errorType: error instanceof Error ? error.name : typeof error,
                authState: 'error'
            }
        })
        return null
    }
}

const fetchUserFromDatabase = unstable_cache(
    async (userId: string) => {
        try {
            const [dbUser] = await prismaEdge.user.findMany({
                where: {
                    id: userId
                }
            })
            return dbUser || null
        } catch (error) {
            logger.error('Failed to fetch user from database', {
                source: 'DatabaseService',
                error: error instanceof Error ? error : new Error('Unknown error'),
                context: { userId }
            })
            return null
        }
    },
    ['database-user-fetch'],
    {
        tags: ['database-user'],
        revalidate: 60 * 2 // 2 minutes
    }
)

// Get current database user - no caching at this level
export async function getCurrentDatabaseUser() {
    try {
        const clerkUser = await getCurrentUser()
        if (!clerkUser) {
            return null
        }

        return await fetchUserFromDatabase(clerkUser.id)
    } catch (error) {
        logger.error('Failed to get database user', {
            source: 'DatabaseService',
            error: error instanceof Error ? error : new Error('Unknown error'),
            context: {
                errorType: error instanceof Error ? error.name : typeof error
            }
        })
        return null
    }
}

// Get database user by ID - uses cached database query
export async function getDatabaseUserById(userId: string) {
    try {
        return await fetchUserFromDatabase(userId)
    } catch (error) {
        logger.error('Failed to get database user by id', {
            source: 'DatabaseService',
            error: error instanceof Error ? error : new Error('Unknown error'),
            context: {
                userId,
                errorType: error instanceof Error ? error.name : typeof error
            }
        })
        return null
    }
}
