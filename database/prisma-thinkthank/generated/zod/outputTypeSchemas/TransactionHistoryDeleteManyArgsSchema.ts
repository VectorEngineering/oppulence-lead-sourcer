import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionHistoryWhereInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereInputSchema'

export const TransactionHistoryDeleteManyArgsSchema: z.ZodType<Prisma.TransactionHistoryDeleteManyArgs> = z
    .object({
        where: TransactionHistoryWhereInputSchema.optional()
    })
    .strict()

export default TransactionHistoryDeleteManyArgsSchema
