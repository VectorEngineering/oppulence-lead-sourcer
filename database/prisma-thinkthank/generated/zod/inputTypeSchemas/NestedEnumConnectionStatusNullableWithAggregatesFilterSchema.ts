import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema'
import { NestedEnumConnectionStatusNullableFilterSchema } from './NestedEnumConnectionStatusNullableFilterSchema'

export const NestedEnumConnectionStatusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumConnectionStatusNullableWithAggregatesFilter> =
    z
        .object({
            equals: z
                .lazy(() => ConnectionStatusSchema)
                .optional()
                .nullable(),
            in: z
                .lazy(() => ConnectionStatusSchema)
                .array()
                .optional()
                .nullable(),
            notIn: z
                .lazy(() => ConnectionStatusSchema)
                .array()
                .optional()
                .nullable(),
            not: z
                .union([z.lazy(() => ConnectionStatusSchema), z.lazy(() => NestedEnumConnectionStatusNullableWithAggregatesFilterSchema)])
                .optional()
                .nullable(),
            _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumConnectionStatusNullableFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumConnectionStatusNullableFilterSchema).optional()
        })
        .strict()

export default NestedEnumConnectionStatusNullableWithAggregatesFilterSchema
