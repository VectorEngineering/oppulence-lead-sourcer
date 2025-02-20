import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointArgsSchema } from '../outputTypeSchemas/EndpointArgsSchema'

export const LogSelectSchema: z.ZodType<Prisma.LogSelect> = z
    .object({
        id: z.boolean().optional(),
        endpointId: z.boolean().optional(),
        type: z.boolean().optional(),
        postType: z.boolean().optional(),
        message: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        endpoint: z.union([z.boolean(), z.lazy(() => EndpointArgsSchema)]).optional()
    })
    .strict()

export default LogSelectSchema
