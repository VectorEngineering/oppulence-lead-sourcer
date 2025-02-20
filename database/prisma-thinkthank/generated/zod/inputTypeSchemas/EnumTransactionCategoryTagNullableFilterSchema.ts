import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryTagSchema } from './TransactionCategoryTagSchema'
import { NestedEnumTransactionCategoryTagNullableFilterSchema } from './NestedEnumTransactionCategoryTagNullableFilterSchema'

export const EnumTransactionCategoryTagNullableFilterSchema: z.ZodType<Prisma.EnumTransactionCategoryTagNullableFilter> = z
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
            .union([z.lazy(() => TransactionCategoryTagSchema), z.lazy(() => NestedEnumTransactionCategoryTagNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default EnumTransactionCategoryTagNullableFilterSchema
