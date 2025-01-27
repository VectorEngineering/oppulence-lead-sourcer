import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'

export const NestedEnumConnectionStatusNullableFilterSchema: z.ZodType<Prisma.NestedEnumConnectionStatusNullableFilter> = z
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
            .union([z.lazy(() => ConnectionStatusSchema), z.lazy(() => NestedEnumConnectionStatusNullableFilterSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default NestedEnumConnectionStatusNullableFilterSchema
