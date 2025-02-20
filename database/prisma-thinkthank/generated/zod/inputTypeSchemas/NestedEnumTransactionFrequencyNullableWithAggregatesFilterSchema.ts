import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionFrequencySchema } from './TransactionFrequencySchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumTransactionFrequencyNullableFilterSchema } from './NestedEnumTransactionFrequencyNullableFilterSchema'

export const NestedEnumTransactionFrequencyNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTransactionFrequencyNullableWithAggregatesFilter> =
    z
        .object({
            equals: z
                .lazy(() => TransactionFrequencySchema)
                .optional()
                .nullable(),
            in: z
                .lazy(() => TransactionFrequencySchema)
                .array()
                .optional()
                .nullable(),
            notIn: z
                .lazy(() => TransactionFrequencySchema)
                .array()
                .optional()
                .nullable(),
            not: z
                .union([
                    z.lazy(() => TransactionFrequencySchema),
                    z.lazy(() => NestedEnumTransactionFrequencyNullableWithAggregatesFilterSchema)
                ])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumTransactionFrequencyNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumTransactionFrequencyNullableFilterSchema).optional()
        })
        .strict()

export default NestedEnumTransactionFrequencyNullableWithAggregatesFilterSchema
