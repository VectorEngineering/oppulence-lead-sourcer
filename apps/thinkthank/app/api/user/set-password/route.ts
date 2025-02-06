import { DubApiError } from '@/lib/api/errors'
import { withSession } from '@/lib/auth'
import { PASSWORD_RESET_TOKEN_EXPIRY } from '@/lib/auth/constants'
import { BusinessConfig as platform } from '@dub/platform-config'
import { prisma } from '@dub/prisma-thinkthank'
import { sendEmail } from 'emails'
import ResetPasswordLink from 'emails/reset-password-link'
import { NextResponse } from 'next/server'
import { randomBytes } from 'node:crypto'

// POST /api/user/set-password - set account password (for users who signed up with a OAuth provider)
export const POST = withSession(async ({ session }) => {
    const user = await prisma.user.findFirst({
        where: {
            id: session.user.id,
            isMachine: false,
            passwordHash: null
        },
        select: {
            id: true
        }
    })

    if (!user) {
        throw new DubApiError({
            code: 'bad_request',
            message: 'You already have a password set. You can change it in your account settings.'
        })
    }

    const { token } = await prisma.passwordResetToken.create({
        data: {
            identifier: session.user.email,
            token: randomBytes(32).toString('hex'),
            expires: new Date(Date.now() + PASSWORD_RESET_TOKEN_EXPIRY * 1000)
        }
    })

    // Send email with password reset link
    await sendEmail({
        subject: `${platform.company}: Password reset instructions`,
        email: session.user.email,
        react: ResetPasswordLink({
            email: session.user.email,
            url: `${process.env.NEXTAUTH_URL}/auth/reset-password/${token}`
        })
    })

    if (process.env.NODE_ENV === 'development') {
        console.info('Password reset URL:', `${process.env.NEXTAUTH_URL}/auth/reset-password/${token}`)
    }

    return NextResponse.json({ ok: true })
})
