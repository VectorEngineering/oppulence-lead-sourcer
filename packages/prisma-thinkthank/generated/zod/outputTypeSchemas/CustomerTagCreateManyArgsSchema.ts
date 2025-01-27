import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagCreateManyInputSchema } from '../inputTypeSchemas/CustomerTagCreateManyInputSchema'

export const CustomerTagCreateManyArgsSchema: z.ZodType<Prisma.CustomerTagCreateManyArgs> = z
    .object({
        data: z.union([CustomerTagCreateManyInputSchema, CustomerTagCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default CustomerTagCreateManyArgsSchema
