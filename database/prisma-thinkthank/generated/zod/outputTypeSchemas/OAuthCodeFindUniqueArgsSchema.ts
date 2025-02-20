import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeIncludeSchema } from '../inputTypeSchemas/OAuthCodeIncludeSchema'
import { OAuthCodeWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthCodeWhereUniqueInputSchema'
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

export const OAuthCodeFindUniqueArgsSchema: z.ZodType<Prisma.OAuthCodeFindUniqueArgs> = z
    .object({
        select: OAuthCodeSelectSchema.optional(),
        include: OAuthCodeIncludeSchema.optional(),
        where: OAuthCodeWhereUniqueInputSchema
    })
    .strict()

export default OAuthCodeFindUniqueArgsSchema
