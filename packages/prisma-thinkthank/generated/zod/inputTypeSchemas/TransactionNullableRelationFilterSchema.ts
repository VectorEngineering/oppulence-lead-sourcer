import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'

export const TransactionNullableRelationFilterSchema: z.ZodType<Prisma.TransactionNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => TransactionWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => TransactionWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default TransactionNullableRelationFilterSchema
