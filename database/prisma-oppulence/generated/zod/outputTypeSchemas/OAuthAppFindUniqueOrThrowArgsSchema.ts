import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthAppIncludeSchema } from '../inputTypeSchemas/OAuthAppIncludeSchema'
import { OAuthAppWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthAppWhereUniqueInputSchema'
import { OAuthCodeFindManyArgsSchema } from './OAuthCodeFindManyArgsSchema'
import { IntegrationArgsSchema } from './IntegrationArgsSchema'
import { OAuthAppCountOutputTypeArgsSchema } from './OAuthAppCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OAuthAppSelectSchema: z.ZodType<Prisma.OAuthAppSelect> = z
    .object({
        id: z.boolean().optional(),
        integrationId: z.boolean().optional(),
        clientId: z.boolean().optional(),
        hashedClientSecret: z.boolean().optional(),
        partialClientSecret: z.boolean().optional(),
        redirectUris: z.boolean().optional(),
        pkce: z.boolean().optional(),
        oAuthCodes: z.union([z.boolean(), z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
        integration: z.union([z.boolean(), z.lazy(() => IntegrationArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => OAuthAppCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const OAuthAppFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OAuthAppFindUniqueOrThrowArgs> = z
    .object({
        select: OAuthAppSelectSchema.optional(),
        include: OAuthAppIncludeSchema.optional(),
        where: OAuthAppWhereUniqueInputSchema
    })
    .strict()

export default OAuthAppFindUniqueOrThrowArgsSchema
