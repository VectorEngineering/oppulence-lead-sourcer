import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskStatusSchema } from './DealTaskStatusSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumDealTaskStatusFilterSchema } from './NestedEnumDealTaskStatusFilterSchema'

export const NestedEnumDealTaskStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDealTaskStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => DealTaskStatusSchema).optional(),
        in: z
            .lazy(() => DealTaskStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealTaskStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealTaskStatusSchema), z.lazy(() => NestedEnumDealTaskStatusWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumDealTaskStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumDealTaskStatusFilterSchema).optional()
    })
    .strict()

export default NestedEnumDealTaskStatusWithAggregatesFilterSchema
