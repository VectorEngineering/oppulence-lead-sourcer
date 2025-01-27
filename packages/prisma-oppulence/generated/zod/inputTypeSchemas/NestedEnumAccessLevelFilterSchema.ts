import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessLevelSchema } from './AccessLevelSchema'

export const NestedEnumAccessLevelFilterSchema: z.ZodType<Prisma.NestedEnumAccessLevelFilter> = z
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

export default NestedEnumAccessLevelFilterSchema
