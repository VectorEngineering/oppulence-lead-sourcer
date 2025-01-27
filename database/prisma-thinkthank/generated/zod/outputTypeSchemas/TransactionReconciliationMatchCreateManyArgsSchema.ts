import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionReconciliationMatchCreateManyInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchCreateManyInputSchema'

export const TransactionReconciliationMatchCreateManyArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchCreateManyArgs> = z
    .object({
        data: z.union([TransactionReconciliationMatchCreateManyInputSchema, TransactionReconciliationMatchCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default TransactionReconciliationMatchCreateManyArgsSchema
