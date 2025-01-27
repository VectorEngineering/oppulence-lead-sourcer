import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointArgsSchema } from '../outputTypeSchemas/EndpointArgsSchema'

export const LeadSelectSchema: z.ZodType<Prisma.LeadSelect> = z
    .object({
        id: z.boolean().optional(),
        endpointId: z.boolean().optional(),
        data: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        endpoint: z.union([z.boolean(), z.lazy(() => EndpointArgsSchema)]).optional()
    })
    .strict()

export default LeadSelectSchema
