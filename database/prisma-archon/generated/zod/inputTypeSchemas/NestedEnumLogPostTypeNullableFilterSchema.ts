import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogPostTypeSchema } from './LogPostTypeSchema'

export const NestedEnumLogPostTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumLogPostTypeNullableFilter> = z
    .object({
        equals: z
            .lazy(() => LogPostTypeSchema)
            .optional()
            .nullable(),
        in: z
            .lazy(() => LogPostTypeSchema)
            .array()
            .optional()
            .nullable(),
        notIn: z
            .lazy(() => LogPostTypeSchema)
            .array()
            .optional()
            .nullable(),
        not: z
            .union([z.lazy(() => LogPostTypeSchema), z.lazy(() => NestedEnumLogPostTypeNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumLogPostTypeNullableFilterSchema
