import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NurtureStatusSchema } from './NurtureStatusSchema'
import { NestedEnumNurtureStatusWithAggregatesFilterSchema } from './NestedEnumNurtureStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumNurtureStatusFilterSchema } from './NestedEnumNurtureStatusFilterSchema'

export const EnumNurtureStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNurtureStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => NurtureStatusSchema).optional(),
        in: z
            .lazy(() => NurtureStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => NurtureStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => NurtureStatusSchema), z.lazy(() => NestedEnumNurtureStatusWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumNurtureStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumNurtureStatusFilterSchema).optional()
    })
    .strict()

export default EnumNurtureStatusWithAggregatesFilterSchema
