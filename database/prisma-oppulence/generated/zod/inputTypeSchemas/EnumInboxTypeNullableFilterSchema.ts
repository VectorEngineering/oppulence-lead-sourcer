import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxTypeSchema } from './InboxTypeSchema'
import { NestedEnumInboxTypeNullableFilterSchema } from './NestedEnumInboxTypeNullableFilterSchema'

export const EnumInboxTypeNullableFilterSchema: z.ZodType<Prisma.EnumInboxTypeNullableFilter> = z
    .object({
        equals: z
            .lazy(() => InboxTypeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => InboxTypeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => InboxTypeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => InboxTypeSchema), z.lazy(() => NestedEnumInboxTypeNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default EnumInboxTypeNullableFilterSchema
