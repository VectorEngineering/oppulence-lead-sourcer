import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema } from './OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema'
import { UserCreateNestedOneWithoutOAuthCodesInputSchema } from './UserCreateNestedOneWithoutOAuthCodesInputSchema'

export const OAuthCodeCreateWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        code: z.string(),
        scopes: z.string().optional().nullable(),
        redirectUri: z.string(),
        codeChallenge: z.string().optional().nullable(),
        codeChallengeMethod: z.string().optional().nullable(),
        expiresAt: z.coerce.date(),
        createdAt: z.coerce.date().optional(),
        oAuthApp: z.lazy(() => OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema),
        user: z.lazy(() => UserCreateNestedOneWithoutOAuthCodesInputSchema)
    })
    .strict()

export default OAuthCodeCreateWithoutProjectInputSchema
