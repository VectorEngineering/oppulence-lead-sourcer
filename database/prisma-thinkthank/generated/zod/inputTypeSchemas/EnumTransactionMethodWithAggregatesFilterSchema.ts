import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionMethodSchema } from './TransactionMethodSchema'
import { NestedEnumTransactionMethodWithAggregatesFilterSchema } from './NestedEnumTransactionMethodWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumTransactionMethodFilterSchema } from './NestedEnumTransactionMethodFilterSchema'

export const EnumTransactionMethodWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTransactionMethodWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => TransactionMethodSchema).optional(),
        in: z
            .lazy(() => TransactionMethodSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => TransactionMethodSchema)
            .array()
            .optional(),
        not: z
            .union([z.lazy(() => TransactionMethodSchema), z.lazy(() => NestedEnumTransactionMethodWithAggregatesFilterSchema)])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumTransactionMethodFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumTransactionMethodFilterSchema).optional()
    })
    .strict()

export default EnumTransactionMethodWithAggregatesFilterSchema
