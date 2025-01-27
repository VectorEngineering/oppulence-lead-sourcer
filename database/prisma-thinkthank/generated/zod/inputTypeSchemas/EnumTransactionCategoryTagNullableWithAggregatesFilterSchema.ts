import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryTagSchema } from './TransactionCategoryTagSchema'
import { NestedEnumTransactionCategoryTagNullableWithAggregatesFilterSchema } from './NestedEnumTransactionCategoryTagNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumTransactionCategoryTagNullableFilterSchema } from './NestedEnumTransactionCategoryTagNullableFilterSchema'

export const EnumTransactionCategoryTagNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTransactionCategoryTagNullableWithAggregatesFilter> =
    z
        .object({
            equals: z
                .lazy(() => TransactionCategoryTagSchema)
                .optional()
                .nullable(),
            in: z
                .lazy(() => TransactionCategoryTagSchema)
                .array()
                .optional()
                .nullable(),
            notIn: z
                .lazy(() => TransactionCategoryTagSchema)
                .array()
                .optional()
                .nullable(),
            not: z
                .union([
                    z.lazy(() => TransactionCategoryTagSchema),
                    z.lazy(() => NestedEnumTransactionCategoryTagNullableWithAggregatesFilterSchema)
                ])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumTransactionCategoryTagNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumTransactionCategoryTagNullableFilterSchema).optional()
        })
        .strict()

export default EnumTransactionCategoryTagNullableWithAggregatesFilterSchema
