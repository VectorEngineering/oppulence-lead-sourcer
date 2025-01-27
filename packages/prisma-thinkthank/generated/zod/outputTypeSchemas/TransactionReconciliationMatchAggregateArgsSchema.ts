import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchWhereInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereInputSchema'
import { TransactionReconciliationMatchOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchOrderByWithRelationInputSchema'
import { TransactionReconciliationMatchWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereUniqueInputSchema'

export const TransactionReconciliationMatchAggregateArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchAggregateArgs> = z
    .object({
        where: TransactionReconciliationMatchWhereInputSchema.optional(),
        orderBy: z
            .union([
                TransactionReconciliationMatchOrderByWithRelationInputSchema.array(),
                TransactionReconciliationMatchOrderByWithRelationInputSchema
            ])
            .optional(),
        cursor: TransactionReconciliationMatchWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default TransactionReconciliationMatchAggregateArgsSchema
