import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealPrioritySchema } from './DealPrioritySchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumDealPriorityFilterSchema } from './NestedEnumDealPriorityFilterSchema'

export const NestedEnumDealPriorityWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDealPriorityWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => DealPrioritySchema).optional(),
        in: z
            .lazy(() => DealPrioritySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealPrioritySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealPrioritySchema), z.lazy(() => NestedEnumDealPriorityWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumDealPriorityFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumDealPriorityFilterSchema).optional()
    })
    .strict()

export default NestedEnumDealPriorityWithAggregatesFilterSchema
