import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityTypeSchema } from './DealActivityTypeSchema'
import { NestedEnumDealActivityTypeWithAggregatesFilterSchema } from './NestedEnumDealActivityTypeWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumDealActivityTypeFilterSchema } from './NestedEnumDealActivityTypeFilterSchema'

export const EnumDealActivityTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDealActivityTypeWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => DealActivityTypeSchema).optional(),
        in: z
            .lazy(() => DealActivityTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealActivityTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealActivityTypeSchema), z.lazy(() => NestedEnumDealActivityTypeWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumDealActivityTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumDealActivityTypeFilterSchema).optional()
    })
    .strict()

export default EnumDealActivityTypeWithAggregatesFilterSchema
