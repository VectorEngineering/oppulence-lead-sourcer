import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxTypeSchema } from './InboxTypeSchema'
import { NestedEnumInboxTypeNullableWithAggregatesFilterSchema } from './NestedEnumInboxTypeNullableWithAggregatesFilterSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumInboxTypeNullableFilterSchema } from './NestedEnumInboxTypeNullableFilterSchema'

export const EnumInboxTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumInboxTypeNullableWithAggregatesFilter> = z
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
            .union([z.lazy(() => InboxTypeSchema), z.lazy(() => NestedEnumInboxTypeNullableWithAggregatesFilterSchema)])
            .optional()
            .nullable(),
        _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumInboxTypeNullableFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumInboxTypeNullableFilterSchema).optional()
    })
    .strict()

export default EnumInboxTypeNullableWithAggregatesFilterSchema
