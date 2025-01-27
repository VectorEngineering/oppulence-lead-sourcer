import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'
import { NestedEnumDealTaskPriorityNullableWithAggregatesFilterSchema } from './NestedEnumDealTaskPriorityNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumDealTaskPriorityNullableFilterSchema } from './NestedEnumDealTaskPriorityNullableFilterSchema'

export const EnumDealTaskPriorityNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDealTaskPriorityNullableWithAggregatesFilter> = z
    .object({
        equals: z
            .lazy(() => DealTaskPrioritySchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => DealTaskPrioritySchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => DealTaskPrioritySchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => DealTaskPrioritySchema), z.lazy(() => NestedEnumDealTaskPriorityNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumDealTaskPriorityNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumDealTaskPriorityNullableFilterSchema).optional()
    })
    .strict()

export default EnumDealTaskPriorityNullableWithAggregatesFilterSchema
