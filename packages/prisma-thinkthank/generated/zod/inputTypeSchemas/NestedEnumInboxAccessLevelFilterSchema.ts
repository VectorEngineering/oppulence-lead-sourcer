import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema'

export const NestedEnumInboxAccessLevelFilterSchema: z.ZodType<Prisma.NestedEnumInboxAccessLevelFilter> = z
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
        not: z.union([z.lazy(() => InboxAccessLevelSchema), z.lazy(() => NestedEnumInboxAccessLevelFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumInboxAccessLevelFilterSchema
