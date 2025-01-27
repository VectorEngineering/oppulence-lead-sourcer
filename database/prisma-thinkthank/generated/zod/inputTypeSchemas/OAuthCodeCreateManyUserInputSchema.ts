import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const OAuthCodeCreateManyUserInputSchema: z.ZodType<Prisma.OAuthCodeCreateManyUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        clientId: z.string(),
        projectId: z.string(),
        code: z.string(),
        scopes: z.string().optional().nullable(),
        redirectUri: z.string(),
        codeChallenge: z.string().optional().nullable(),
        codeChallengeMethod: z.string().optional().nullable(),
        expiresAt: z.coerce.date(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default OAuthCodeCreateManyUserInputSchema
