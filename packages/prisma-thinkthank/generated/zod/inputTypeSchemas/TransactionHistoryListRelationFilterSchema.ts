import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionHistoryWhereInputSchema } from './TransactionHistoryWhereInputSchema'

export const TransactionHistoryListRelationFilterSchema: z.ZodType<Prisma.TransactionHistoryListRelationFilter> = z
    .object({
        every: z.lazy(() => TransactionHistoryWhereInputSchema).optional(),
        some: z.lazy(() => TransactionHistoryWhereInputSchema).optional(),
        none: z.lazy(() => TransactionHistoryWhereInputSchema).optional()
    })
    .strict()

export default TransactionHistoryListRelationFilterSchema
