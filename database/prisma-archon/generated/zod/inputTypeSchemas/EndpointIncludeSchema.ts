import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { LeadFindManyArgsSchema } from '../outputTypeSchemas/LeadFindManyArgsSchema'
import { LogFindManyArgsSchema } from '../outputTypeSchemas/LogFindManyArgsSchema'
import { EndpointCountOutputTypeArgsSchema } from '../outputTypeSchemas/EndpointCountOutputTypeArgsSchema'

export const EndpointIncludeSchema: z.ZodType<Prisma.EndpointInclude> = z
    .object({
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        leads: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        logs: z.union([z.boolean(), z.lazy(() => LogFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => EndpointCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default EndpointIncludeSchema
