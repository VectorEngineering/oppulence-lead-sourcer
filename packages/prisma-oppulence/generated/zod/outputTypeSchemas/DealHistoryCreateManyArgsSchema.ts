import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealHistoryCreateManyInputSchema } from '../inputTypeSchemas/DealHistoryCreateManyInputSchema'

export const DealHistoryCreateManyArgsSchema: z.ZodType<Prisma.DealHistoryCreateManyArgs> = z
    .object({
        data: z.union([DealHistoryCreateManyInputSchema, DealHistoryCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealHistoryCreateManyArgsSchema
