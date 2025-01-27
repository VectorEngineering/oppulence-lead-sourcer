import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityTypeSchema } from './DealActivityTypeSchema'

export const NestedEnumDealActivityTypeFilterSchema: z.ZodType<Prisma.NestedEnumDealActivityTypeFilter> = z
    .object({
        equals: z.lazy(() => DealActivityTypeSchema).optional(),
        in: z
            .lazy(() => DealActivityTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealActivityTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealActivityTypeSchema), z.lazy(() => NestedEnumDealActivityTypeFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumDealActivityTypeFilterSchema
