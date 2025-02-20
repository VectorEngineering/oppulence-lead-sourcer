import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionPrioritySchema } from './TransactionPrioritySchema'
import { NestedEnumTransactionPriorityFilterSchema } from './NestedEnumTransactionPriorityFilterSchema'

export const EnumTransactionPriorityFilterSchema: z.ZodType<Prisma.EnumTransactionPriorityFilter> = z
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

export default EnumTransactionPriorityFilterSchema
