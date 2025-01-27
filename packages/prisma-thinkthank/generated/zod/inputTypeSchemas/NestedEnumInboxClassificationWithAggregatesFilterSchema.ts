import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxClassificationSchema } from './InboxClassificationSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumInboxClassificationFilterSchema } from './NestedEnumInboxClassificationFilterSchema'

export const NestedEnumInboxClassificationWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumInboxClassificationWithAggregatesFilter> =
    z
        .object({
            equals: z.lazy(() => InboxClassificationSchema).optional(),
            in: z
                .lazy(() => InboxClassificationSchema)
                .array()
                .optional(),
            notIn: z
                .lazy(() => InboxClassificationSchema)
                .array()
                .optional(),
            not: z
                .union([z.lazy(() => InboxClassificationSchema), z.lazy(() => NestedEnumInboxClassificationWithAggregatesFilterSchema)])
                .optional(),
            _count: z.lazy(() => NestedIntFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumInboxClassificationFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumInboxClassificationFilterSchema).optional()
        })
        .strict()

export default NestedEnumInboxClassificationWithAggregatesFilterSchema
