import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutTypeSchema } from './PayoutTypeSchema'
import { NestedEnumPayoutTypeFilterSchema } from './NestedEnumPayoutTypeFilterSchema'

export const EnumPayoutTypeFilterSchema: z.ZodType<Prisma.EnumPayoutTypeFilter> = z
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

export default EnumPayoutTypeFilterSchema
