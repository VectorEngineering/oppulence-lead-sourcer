import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessLevelSchema } from './AccessLevelSchema'
import { NestedEnumAccessLevelFilterSchema } from './NestedEnumAccessLevelFilterSchema'

export const EnumAccessLevelFilterSchema: z.ZodType<Prisma.EnumAccessLevelFilter> = z
    .object({
        equals: z.lazy(() => AccessLevelSchema).optional(),
        in: z
            .lazy(() => AccessLevelSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => AccessLevelSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => AccessLevelSchema), z.lazy(() => NestedEnumAccessLevelFilterSchema)]).optional()
    })
    .strict()

export default EnumAccessLevelFilterSchema
