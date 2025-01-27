import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealPrioritySchema } from './DealPrioritySchema'
import { NestedEnumDealPriorityFilterSchema } from './NestedEnumDealPriorityFilterSchema'

export const EnumDealPriorityFilterSchema: z.ZodType<Prisma.EnumDealPriorityFilter> = z
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

export default EnumDealPriorityFilterSchema
