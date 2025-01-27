import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CommissionTypeSchema } from './CommissionTypeSchema'

export const NestedEnumCommissionTypeFilterSchema: z.ZodType<Prisma.NestedEnumCommissionTypeFilter> = z
    .object({
        equals: z.lazy(() => CommissionTypeSchema).optional(),
        in: z
            .lazy(() => CommissionTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => CommissionTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => CommissionTypeSchema), z.lazy(() => NestedEnumCommissionTypeFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumCommissionTypeFilterSchema
