import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutTypeSchema } from './PayoutTypeSchema'

export const NestedEnumPayoutTypeFilterSchema: z.ZodType<Prisma.NestedEnumPayoutTypeFilter> = z
    .object({
        equals: z.lazy(() => PayoutTypeSchema).optional(),
        in: z
            .lazy(() => PayoutTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PayoutTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => PayoutTypeSchema), z.lazy(() => NestedEnumPayoutTypeFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumPayoutTypeFilterSchema
