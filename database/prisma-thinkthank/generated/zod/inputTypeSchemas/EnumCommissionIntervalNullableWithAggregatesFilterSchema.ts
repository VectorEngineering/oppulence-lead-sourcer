import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { NestedEnumCommissionIntervalNullableWithAggregatesFilterSchema } from './NestedEnumCommissionIntervalNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumCommissionIntervalNullableFilterSchema } from './NestedEnumCommissionIntervalNullableFilterSchema'

export const EnumCommissionIntervalNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCommissionIntervalNullableWithAggregatesFilter> =
    z
        .object({
            equals: z
                .lazy(() => CommissionIntervalSchema)
                .optional()
                .nullable(),
            in: z
                .lazy(() => CommissionIntervalSchema)
                .array()
                .optional()
                .nullable(),
            notIn: z
                .lazy(() => CommissionIntervalSchema)
                .array()
                .optional()
                .nullable(),
            not: z
                .union([
                    z.lazy(() => CommissionIntervalSchema),
                    z.lazy(() => NestedEnumCommissionIntervalNullableWithAggregatesFilterSchema)
                ])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumCommissionIntervalNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumCommissionIntervalNullableFilterSchema).optional()
        })
        .strict()

export default EnumCommissionIntervalNullableWithAggregatesFilterSchema
