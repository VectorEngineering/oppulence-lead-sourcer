import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountTypeSchema } from './AccountTypeSchema'
import { NestedEnumAccountTypeNullableWithAggregatesFilterSchema } from './NestedEnumAccountTypeNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumAccountTypeNullableFilterSchema } from './NestedEnumAccountTypeNullableFilterSchema'

export const EnumAccountTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountTypeNullableWithAggregatesFilter> = z
    .object({
        equals: z
            .lazy(() => AccountTypeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => AccountTypeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => AccountTypeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => AccountTypeSchema), z.lazy(() => NestedEnumAccountTypeNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumAccountTypeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumAccountTypeNullableFilterSchema).optional()
    })
    .strict()

export default EnumAccountTypeNullableWithAggregatesFilterSchema
