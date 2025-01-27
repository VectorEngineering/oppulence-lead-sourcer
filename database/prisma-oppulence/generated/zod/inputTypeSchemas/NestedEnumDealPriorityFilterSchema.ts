import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealPrioritySchema } from './DealPrioritySchema'

export const NestedEnumDealPriorityFilterSchema: z.ZodType<Prisma.NestedEnumDealPriorityFilter> = z
    .object({
        equals: z.lazy(() => DealPrioritySchema).optional(),
        in: z
            .lazy(() => DealPrioritySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealPrioritySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealPrioritySchema), z.lazy(() => NestedEnumDealPriorityFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumDealPriorityFilterSchema
