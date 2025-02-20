import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenIncludeSchema } from '../inputTypeSchemas/RestrictedTokenIncludeSchema'
import { RestrictedTokenWhereInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereInputSchema'
import { RestrictedTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/RestrictedTokenOrderByWithRelationInputSchema'
import { RestrictedTokenWhereUniqueInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereUniqueInputSchema'
import { RestrictedTokenScalarFieldEnumSchema } from '../inputTypeSchemas/RestrictedTokenScalarFieldEnumSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { OAuthRefreshTokenFindManyArgsSchema } from '../outputTypeSchemas/OAuthRefreshTokenFindManyArgsSchema'
import { InstalledIntegrationArgsSchema } from '../outputTypeSchemas/InstalledIntegrationArgsSchema'
import { RestrictedTokenCountOutputTypeArgsSchema } from '../outputTypeSchemas/RestrictedTokenCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestrictedTokenSelectSchema: z.ZodType<Prisma.RestrictedTokenSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        hashedKey: z.boolean().optional(),
        partialKey: z.boolean().optional(),
        scopes: z.boolean().optional(),
        expires: z.boolean().optional(),
        lastUsed: z.boolean().optional(),
        rateLimit: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        installationId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        refreshTokens: z.union([z.boolean(), z.lazy(() => OAuthRefreshTokenFindManyArgsSchema)]).optional(),
        installedIntegration: z.union([z.boolean(), z.lazy(() => InstalledIntegrationArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => RestrictedTokenCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const RestrictedTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RestrictedTokenFindFirstOrThrowArgs> = z
    .object({
        select: RestrictedTokenSelectSchema.optional(),
        include: RestrictedTokenIncludeSchema.optional(),
        where: RestrictedTokenWhereInputSchema.optional(),
        orderBy: z.union([RestrictedTokenOrderByWithRelationInputSchema.array(), RestrictedTokenOrderByWithRelationInputSchema]).optional(),
        cursor: RestrictedTokenWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([RestrictedTokenScalarFieldEnumSchema, RestrictedTokenScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default RestrictedTokenFindFirstOrThrowArgsSchema
