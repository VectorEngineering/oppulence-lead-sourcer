import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { IntegrationCreateManyInputSchema } from '../inputTypeSchemas/IntegrationCreateManyInputSchema'

export const IntegrationCreateManyArgsSchema: z.ZodType<Prisma.IntegrationCreateManyArgs> = z
    .object({
        data: z.union([IntegrationCreateManyInputSchema, IntegrationCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default IntegrationCreateManyArgsSchema
