import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionReconciliationStatusSchema } from './TransactionReconciliationStatusSchema'
import { NestedEnumTransactionReconciliationStatusWithAggregatesFilterSchema } from './NestedEnumTransactionReconciliationStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumTransactionReconciliationStatusFilterSchema } from './NestedEnumTransactionReconciliationStatusFilterSchema'

export const EnumTransactionReconciliationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTransactionReconciliationStatusWithAggregatesFilter> =
    z
        .object({
            equals: z.lazy(() => TransactionReconciliationStatusSchema).optional(),
            in: z
                .lazy(() => TransactionReconciliationStatusSchema)
                .array()
                .optional(),
            notIn: z
                .lazy(() => TransactionReconciliationStatusSchema)
                .array()
                .optional(),
            not: z
                .union([
                    z.lazy(() => TransactionReconciliationStatusSchema),
                    z.lazy(() => NestedEnumTransactionReconciliationStatusWithAggregatesFilterSchema)
                ])
                .optional(),
            _count: z.lazy(() => NestedIntFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumTransactionReconciliationStatusFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumTransactionReconciliationStatusFilterSchema).optional()
        })
        .strict()

export default EnumTransactionReconciliationStatusWithAggregatesFilterSchema
