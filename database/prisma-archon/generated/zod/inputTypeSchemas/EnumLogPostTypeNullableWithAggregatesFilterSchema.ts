import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogPostTypeSchema } from './LogPostTypeSchema'
import { NestedEnumLogPostTypeNullableWithAggregatesFilterSchema } from './NestedEnumLogPostTypeNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumLogPostTypeNullableFilterSchema } from './NestedEnumLogPostTypeNullableFilterSchema'

export const EnumLogPostTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLogPostTypeNullableWithAggregatesFilter> = z
    .object({
        equals: z
            .lazy(() => LogPostTypeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => LogPostTypeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => LogPostTypeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => LogPostTypeSchema), z.lazy(() => NestedEnumLogPostTypeNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumLogPostTypeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumLogPostTypeNullableFilterSchema).optional()
    })
    .strict()

export default EnumLogPostTypeNullableWithAggregatesFilterSchema
