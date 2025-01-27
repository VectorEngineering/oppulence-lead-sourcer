import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema'
import { NestedEnumInboxAccessLevelFilterSchema } from './NestedEnumInboxAccessLevelFilterSchema'

export const EnumInboxAccessLevelFilterSchema: z.ZodType<Prisma.EnumInboxAccessLevelFilter> = z
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

export default EnumInboxAccessLevelFilterSchema
