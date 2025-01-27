import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointCreateManyInputSchema } from '../inputTypeSchemas/EndpointCreateManyInputSchema'

export const EndpointCreateManyArgsSchema: z.ZodType<Prisma.EndpointCreateManyArgs> = z
    .object({
        data: z.union([EndpointCreateManyInputSchema, EndpointCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default EndpointCreateManyArgsSchema
