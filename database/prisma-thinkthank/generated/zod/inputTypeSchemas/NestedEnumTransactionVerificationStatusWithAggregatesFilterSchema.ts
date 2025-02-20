import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumTransactionVerificationStatusFilterSchema } from './NestedEnumTransactionVerificationStatusFilterSchema'

export const NestedEnumTransactionVerificationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTransactionVerificationStatusWithAggregatesFilter> =
    z
        .object({
            equals: z.lazy(() => TransactionVerificationStatusSchema).optional(),
            in: z
                .lazy(() => TransactionVerificationStatusSchema)
                .array()
                .optional(),
            notIn: z
                .lazy(() => TransactionVerificationStatusSchema)
                .array()
                .optional(),
            not: z
                .union([
                    z.lazy(() => TransactionVerificationStatusSchema),
                    z.lazy(() => NestedEnumTransactionVerificationStatusWithAggregatesFilterSchema)
                ])
                .optional(),
            _count: z.lazy(() => NestedIntFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumTransactionVerificationStatusFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumTransactionVerificationStatusFilterSchema).optional()
        })
        .strict()

export default NestedEnumTransactionVerificationStatusWithAggregatesFilterSchema
