import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionHistoryCreateManyInputSchema } from '../inputTypeSchemas/TransactionHistoryCreateManyInputSchema'

export const TransactionHistoryCreateManyArgsSchema: z.ZodType<Prisma.TransactionHistoryCreateManyArgs> = z
    .object({
        data: z.union([TransactionHistoryCreateManyInputSchema, TransactionHistoryCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default TransactionHistoryCreateManyArgsSchema
