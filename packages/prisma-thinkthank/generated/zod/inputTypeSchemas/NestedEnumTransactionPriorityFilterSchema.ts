import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionPrioritySchema } from './TransactionPrioritySchema'

export const NestedEnumTransactionPriorityFilterSchema: z.ZodType<Prisma.NestedEnumTransactionPriorityFilter> = z
    .object({
        equals: z.lazy(() => TransactionPrioritySchema).optional(),
        in: z
            .lazy(() => TransactionPrioritySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => TransactionPrioritySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => TransactionPrioritySchema), z.lazy(() => NestedEnumTransactionPriorityFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumTransactionPriorityFilterSchema
