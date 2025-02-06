import type { UserMetadata } from '@/lib/types/clerk'
import { clerkMiddleware } from '@clerk/nextjs/server'
import { prismaEdge } from '@dub/prisma-archon/edge'
import { NextResponse } from 'next/server'
import { logger } from './lib/logger'

// --- Public routes that don't require authentication
const PUBLIC_ROUTES = new Set(['/login', '/sign-up', '/api/webhook/clerk', '/api/public', '/check-email'])

// --- Onboarding paths and steps
const ONBOARDING_STEPS = ['welcome', 'account', 'workspace', 'team'] as const

/**
 * Checks if the path is publicly accessible (unauthenticated).
 */
function isPublicRoute(pathname: string): boolean {
    // Simple check using the set + additional patterns if needed
    return PUBLIC_ROUTES.has(pathname) || pathname.startsWith('/api/public/')
}

/**
 * Determines which onboarding step the user needs to complete next
 */
function getNextOnboardingStep(metadata: UserMetadata | undefined): (typeof ONBOARDING_STEPS)[number] | null {
    if (!metadata) return 'welcome'

    if (!metadata.hasWorkspace) return 'workspace'
    if (!metadata.hasProfile) return 'account'
    if (!metadata.onboardingComplete) return 'team'

    return null
}

/**
 * Checks if the user has completed onboarding
 */
function hasCompletedOnboarding(metadata: UserMetadata | undefined): boolean {
    if (!metadata) return false

    return metadata.onboardingComplete === true && metadata.hasProfile === true && metadata.hasWorkspace === true
}

/**
 * Get user from database
 */
async function getDatabaseUser(userId: string) {
    try {
        const [user] = await prismaEdge.user.findMany({
            where: { id: userId },
            take: 1
        })
        return user
    } catch (error) {
        logger.error('Failed to fetch user from database', { userId, error })
        return null
    }
}

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth()
    const { pathname } = new URL(req.url)

    // 1. If it's a public route, skip all checks
    if (isPublicRoute(pathname)) {
        return NextResponse.next()
    }

    // 2. If no user is signed in, redirect to /login
    if (!userId) {
        const loginUrl = new URL('/login', req.url)

        // If not on the homepage, send a return_to param
        if (pathname !== '/') {
            loginUrl.searchParams.set('return_to', pathname.substring(1))
        }
        return NextResponse.redirect(loginUrl)
    }

    // 3. If user is authenticated and on root path, redirect to portal
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/portal', req.url))
    }

    // 4. Lookup user in the DB
    const dbUser = await getDatabaseUser(userId)

    // 5. If user not found in DB, redirect to /onboarding?step=welcome
    if (!dbUser && !pathname.startsWith('/onboarding')) {
        return NextResponse.redirect(new URL('/onboarding?step=welcome', req.url))
    }

    // 6. If user in DB but hasn't completed onboarding, redirect to appropriate step
    if (dbUser && !dbUser.onboardingComplete && !pathname.startsWith('/onboarding')) {
        return NextResponse.redirect(new URL('/onboarding?step=workspace', req.url))
    }

    // 7. Otherwise, continue
    return NextResponse.next()
})

/**
 * Match all routes except:
 * 1) Static assets (_next/static)
 * 2) Next.js image routes (_next/image)
 * 3) Favicon / or any route that ends with a typical image extension
 */
export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|ico)$).*)', '/portal/:path*', '/onboarding/:path*']
}
