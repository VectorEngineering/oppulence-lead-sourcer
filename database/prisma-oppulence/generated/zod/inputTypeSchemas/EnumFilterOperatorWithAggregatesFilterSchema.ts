import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FilterOperatorSchema } from './FilterOperatorSchema'
import { NestedEnumFilterOperatorWithAggregatesFilterSchema } from './NestedEnumFilterOperatorWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumFilterOperatorFilterSchema } from './NestedEnumFilterOperatorFilterSchema'

export const EnumFilterOperatorWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFilterOperatorWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => FilterOperatorSchema).optional(),
        in: z
            .lazy(() => FilterOperatorSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => FilterOperatorSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => FilterOperatorSchema), z.lazy(() => NestedEnumFilterOperatorWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumFilterOperatorFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumFilterOperatorFilterSchema).optional()
    })
    .strict()

export default EnumFilterOperatorWithAggregatesFilterSchema
