import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionHistorySelectSchema } from '../inputTypeSchemas/TransactionHistorySelectSchema'
import { TransactionHistoryIncludeSchema } from '../inputTypeSchemas/TransactionHistoryIncludeSchema'

export const TransactionHistoryArgsSchema: z.ZodType<Prisma.TransactionHistoryDefaultArgs> = z
    .object({
        select: z.lazy(() => TransactionHistorySelectSchema).optional(),
        include: z.lazy(() => TransactionHistoryIncludeSchema).optional()
    })
    .strict()

export default TransactionHistoryArgsSchema
