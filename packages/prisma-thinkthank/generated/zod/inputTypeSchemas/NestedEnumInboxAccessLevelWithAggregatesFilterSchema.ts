import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumInboxAccessLevelFilterSchema } from './NestedEnumInboxAccessLevelFilterSchema'

export const NestedEnumInboxAccessLevelWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumInboxAccessLevelWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => InboxAccessLevelSchema).optional(),
        in: z
            .lazy(() => InboxAccessLevelSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => InboxAccessLevelSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => InboxAccessLevelSchema), z.lazy(() => NestedEnumInboxAccessLevelWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumInboxAccessLevelFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumInboxAccessLevelFilterSchema).optional()
    })
    .strict()

export default NestedEnumInboxAccessLevelWithAggregatesFilterSchema
