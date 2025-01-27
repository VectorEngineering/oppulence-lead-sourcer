import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionEnrichmentCreateManyInputSchema } from '../inputTypeSchemas/TransactionEnrichmentCreateManyInputSchema'

export const TransactionEnrichmentCreateManyArgsSchema: z.ZodType<Prisma.TransactionEnrichmentCreateManyArgs> = z
    .object({
        data: z.union([TransactionEnrichmentCreateManyInputSchema, TransactionEnrichmentCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default TransactionEnrichmentCreateManyArgsSchema
