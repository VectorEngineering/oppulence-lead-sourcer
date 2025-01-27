import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FeedbackTypeSchema } from './FeedbackTypeSchema'
import { NestedEnumFeedbackTypeWithAggregatesFilterSchema } from './NestedEnumFeedbackTypeWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumFeedbackTypeFilterSchema } from './NestedEnumFeedbackTypeFilterSchema'

export const EnumFeedbackTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFeedbackTypeWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => FeedbackTypeSchema).optional(),
        in: z
            .lazy(() => FeedbackTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => FeedbackTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => FeedbackTypeSchema), z.lazy(() => NestedEnumFeedbackTypeWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumFeedbackTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumFeedbackTypeFilterSchema).optional()
    })
    .strict()

export default EnumFeedbackTypeWithAggregatesFilterSchema
