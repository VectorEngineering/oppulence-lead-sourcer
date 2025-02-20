import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'

export const NestedEnumCommissionIntervalNullableFilterSchema: z.ZodType<Prisma.NestedEnumCommissionIntervalNullableFilter> = z
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
            .union([z.lazy(() => CommissionIntervalSchema), z.lazy(() => NestedEnumCommissionIntervalNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumCommissionIntervalNullableFilterSchema
