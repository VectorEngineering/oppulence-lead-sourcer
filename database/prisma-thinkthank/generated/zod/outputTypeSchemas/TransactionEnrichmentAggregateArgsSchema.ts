import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionEnrichmentWhereInputSchema } from '../inputTypeSchemas/TransactionEnrichmentWhereInputSchema'
import { TransactionEnrichmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionEnrichmentOrderByWithRelationInputSchema'
import { TransactionEnrichmentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionEnrichmentWhereUniqueInputSchema'

export const TransactionEnrichmentAggregateArgsSchema: z.ZodType<Prisma.TransactionEnrichmentAggregateArgs> = z
    .object({
        where: TransactionEnrichmentWhereInputSchema.optional(),
        orderBy: z
            .union([TransactionEnrichmentOrderByWithRelationInputSchema.array(), TransactionEnrichmentOrderByWithRelationInputSchema])
            .optional(),
        cursor: TransactionEnrichmentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default TransactionEnrichmentAggregateArgsSchema
