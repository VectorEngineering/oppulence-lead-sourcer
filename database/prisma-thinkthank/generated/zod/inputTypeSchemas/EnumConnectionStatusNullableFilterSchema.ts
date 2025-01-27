import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { NestedEnumConnectionStatusNullableFilterSchema } from './NestedEnumConnectionStatusNullableFilterSchema'

export const EnumConnectionStatusNullableFilterSchema: z.ZodType<Prisma.EnumConnectionStatusNullableFilter> = z
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

export default EnumConnectionStatusNullableFilterSchema
