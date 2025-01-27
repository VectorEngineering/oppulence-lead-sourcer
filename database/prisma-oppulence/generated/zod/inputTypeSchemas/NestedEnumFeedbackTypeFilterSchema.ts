import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FeedbackTypeSchema } from './FeedbackTypeSchema'

export const NestedEnumFeedbackTypeFilterSchema: z.ZodType<Prisma.NestedEnumFeedbackTypeFilter> = z
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
        not: z.union([z.lazy(() => FeedbackTypeSchema), z.lazy(() => NestedEnumFeedbackTypeFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumFeedbackTypeFilterSchema
