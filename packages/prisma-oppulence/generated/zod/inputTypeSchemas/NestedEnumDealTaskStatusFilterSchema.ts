import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskStatusSchema } from './DealTaskStatusSchema'

export const NestedEnumDealTaskStatusFilterSchema: z.ZodType<Prisma.NestedEnumDealTaskStatusFilter> = z
    .object({
        equals: z.lazy(() => DealTaskStatusSchema).optional(),
        in: z
            .lazy(() => DealTaskStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealTaskStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealTaskStatusSchema), z.lazy(() => NestedEnumDealTaskStatusFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumDealTaskStatusFilterSchema
