import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PlanSchema } from './PlanSchema'
import { NestedEnumPlanNullableWithAggregatesFilterSchema } from './NestedEnumPlanNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumPlanNullableFilterSchema } from './NestedEnumPlanNullableFilterSchema'

export const EnumPlanNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPlanNullableWithAggregatesFilter> = z
    .object({
        equals: z
            .lazy(() => PlanSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => PlanSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => PlanSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => PlanSchema), z.lazy(() => NestedEnumPlanNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumPlanNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumPlanNullableFilterSchema).optional()
    })
    .strict()

export default EnumPlanNullableWithAggregatesFilterSchema
