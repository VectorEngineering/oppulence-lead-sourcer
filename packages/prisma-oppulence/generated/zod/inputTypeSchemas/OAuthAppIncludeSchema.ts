import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeFindManyArgsSchema } from '../outputTypeSchemas/OAuthCodeFindManyArgsSchema'
import { IntegrationArgsSchema } from '../outputTypeSchemas/IntegrationArgsSchema'
import { OAuthAppCountOutputTypeArgsSchema } from '../outputTypeSchemas/OAuthAppCountOutputTypeArgsSchema'

export const OAuthAppIncludeSchema: z.ZodType<Prisma.OAuthAppInclude> = z
    .object({
        oAuthCodes: z.union([z.boolean(), z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
        integration: z.union([z.boolean(), z.lazy(() => IntegrationArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => OAuthAppCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default OAuthAppIncludeSchema
