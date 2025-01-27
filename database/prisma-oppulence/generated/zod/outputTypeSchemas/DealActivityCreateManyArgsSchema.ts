import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealActivityCreateManyInputSchema } from '../inputTypeSchemas/DealActivityCreateManyInputSchema'

export const DealActivityCreateManyArgsSchema: z.ZodType<Prisma.DealActivityCreateManyArgs> = z
    .object({
        data: z.union([DealActivityCreateManyInputSchema, DealActivityCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealActivityCreateManyArgsSchema
