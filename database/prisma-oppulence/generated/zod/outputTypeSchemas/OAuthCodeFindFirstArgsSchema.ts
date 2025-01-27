import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeIncludeSchema } from '../inputTypeSchemas/OAuthCodeIncludeSchema'
import { OAuthCodeWhereInputSchema } from '../inputTypeSchemas/OAuthCodeWhereInputSchema'
import { OAuthCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/OAuthCodeOrderByWithRelationInputSchema'
import { OAuthCodeWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeScalarFieldEnumSchema } from '../inputTypeSchemas/OAuthCodeScalarFieldEnumSchema'
import { OAuthAppArgsSchema } from './OAuthAppArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
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

export const OAuthCodeFindFirstArgsSchema: z.ZodType<Prisma.OAuthCodeFindFirstArgs> = z
    .object({
        select: OAuthCodeSelectSchema.optional(),
        include: OAuthCodeIncludeSchema.optional(),
        where: OAuthCodeWhereInputSchema.optional(),
        orderBy: z.union([OAuthCodeOrderByWithRelationInputSchema.array(), OAuthCodeOrderByWithRelationInputSchema]).optional(),
        cursor: OAuthCodeWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([OAuthCodeScalarFieldEnumSchema, OAuthCodeScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default OAuthCodeFindFirstArgsSchema
