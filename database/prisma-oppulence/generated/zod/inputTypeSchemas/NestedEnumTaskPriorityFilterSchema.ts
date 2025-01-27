import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TaskPrioritySchema } from './TaskPrioritySchema'

export const NestedEnumTaskPriorityFilterSchema: z.ZodType<Prisma.NestedEnumTaskPriorityFilter> = z
    .object({
        equals: z.lazy(() => TaskPrioritySchema).optional(),
        in: z
            .lazy(() => TaskPrioritySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => TaskPrioritySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => TaskPrioritySchema), z.lazy(() => NestedEnumTaskPriorityFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumTaskPriorityFilterSchema
