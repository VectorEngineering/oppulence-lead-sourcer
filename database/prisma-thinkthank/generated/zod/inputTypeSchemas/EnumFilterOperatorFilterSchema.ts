import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FilterOperatorSchema } from './FilterOperatorSchema'
import { NestedEnumFilterOperatorFilterSchema } from './NestedEnumFilterOperatorFilterSchema'

export const EnumFilterOperatorFilterSchema: z.ZodType<Prisma.EnumFilterOperatorFilter> = z
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
        not: z.union([z.lazy(() => FilterOperatorSchema), z.lazy(() => NestedEnumFilterOperatorFilterSchema)]).optional()
    })
    .strict()

export default EnumFilterOperatorFilterSchema
