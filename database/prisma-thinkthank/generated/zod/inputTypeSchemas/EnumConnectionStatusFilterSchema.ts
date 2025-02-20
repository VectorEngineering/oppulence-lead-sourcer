import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { NestedEnumConnectionStatusFilterSchema } from './NestedEnumConnectionStatusFilterSchema'

export const EnumConnectionStatusFilterSchema: z.ZodType<Prisma.EnumConnectionStatusFilter> = z
    .object({
        equals: z.lazy(() => ConnectionStatusSchema).optional(),
        in: z
            .lazy(() => ConnectionStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ConnectionStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => ConnectionStatusSchema), z.lazy(() => NestedEnumConnectionStatusFilterSchema)]).optional()
    })
    .strict()

export default EnumConnectionStatusFilterSchema
