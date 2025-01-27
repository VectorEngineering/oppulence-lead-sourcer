import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxClassificationSchema } from './InboxClassificationSchema'
import { NestedEnumInboxClassificationFilterSchema } from './NestedEnumInboxClassificationFilterSchema'

export const EnumInboxClassificationFilterSchema: z.ZodType<Prisma.EnumInboxClassificationFilter> = z
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
        not: z.union([z.lazy(() => InboxClassificationSchema), z.lazy(() => NestedEnumInboxClassificationFilterSchema)]).optional()
    })
    .strict()

export default EnumInboxClassificationFilterSchema
