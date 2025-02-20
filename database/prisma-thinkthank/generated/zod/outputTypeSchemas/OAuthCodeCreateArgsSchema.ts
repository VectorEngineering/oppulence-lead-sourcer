import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeIncludeSchema } from '../inputTypeSchemas/OAuthCodeIncludeSchema'
import { OAuthCodeCreateInputSchema } from '../inputTypeSchemas/OAuthCodeCreateInputSchema'
import { OAuthCodeUncheckedCreateInputSchema } from '../inputTypeSchemas/OAuthCodeUncheckedCreateInputSchema'
import { OAuthAppArgsSchema } from '../outputTypeSchemas/OAuthAppArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OAuthCodeSelectSchema: z.ZodType<Prisma.OAuthCodeSelect> = z
    .object({
        id: z.boolean().optional(),
        clientId: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        code: z.boolean().optional(),
        scopes: z.boolean().optional(),
        redirectUri: z.boolean().optional(),
        codeChallenge: z.boolean().optional(),
        codeChallengeMethod: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        oAuthApp: z.union([z.boolean(), z.lazy(() => OAuthAppArgsSchema)]).optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const OAuthCodeCreateArgsSchema: z.ZodType<Prisma.OAuthCodeCreateArgs> = z
    .object({
        select: OAuthCodeSelectSchema.optional(),
        include: OAuthCodeIncludeSchema.optional(),
        data: z.union([OAuthCodeCreateInputSchema, OAuthCodeUncheckedCreateInputSchema])
    })
    .strict()

export default OAuthCodeCreateArgsSchema
