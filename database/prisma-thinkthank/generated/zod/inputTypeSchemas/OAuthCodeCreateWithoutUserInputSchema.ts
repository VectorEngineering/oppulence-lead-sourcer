import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema } from './OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema'
import { ProjectCreateNestedOneWithoutOAuthCodesInputSchema } from './ProjectCreateNestedOneWithoutOAuthCodesInputSchema'

export const OAuthCodeCreateWithoutUserInputSchema: z.ZodType<Prisma.OAuthCodeCreateWithoutUserInput> = z
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
        project: z.lazy(() => ProjectCreateNestedOneWithoutOAuthCodesInputSchema)
    })
    .strict()

export default OAuthCodeCreateWithoutUserInputSchema
