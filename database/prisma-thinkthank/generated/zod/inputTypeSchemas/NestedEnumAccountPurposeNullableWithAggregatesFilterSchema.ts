import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountPurposeSchema } from './AccountPurposeSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumAccountPurposeNullableFilterSchema } from './NestedEnumAccountPurposeNullableFilterSchema'

export const NestedEnumAccountPurposeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAccountPurposeNullableWithAggregatesFilter> =
    z
        .object({
            equals: z
                .lazy(() => AccountPurposeSchema)
                .optional()
                .nullable(),
            in: z
                .lazy(() => AccountPurposeSchema)
                .array()
                .optional()
                .nullable(),
            notIn: z
                .lazy(() => AccountPurposeSchema)
                .array()
                .optional()
                .nullable(),
            not: z
                .union([z.lazy(() => AccountPurposeSchema), z.lazy(() => NestedEnumAccountPurposeNullableWithAggregatesFilterSchema)])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumAccountPurposeNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumAccountPurposeNullableFilterSchema).optional()
        })
        .strict()

export default NestedEnumAccountPurposeNullableWithAggregatesFilterSchema
