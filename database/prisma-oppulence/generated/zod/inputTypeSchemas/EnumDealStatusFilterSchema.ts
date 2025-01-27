import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealStatusSchema } from './DealStatusSchema'
import { NestedEnumDealStatusFilterSchema } from './NestedEnumDealStatusFilterSchema'

export const EnumDealStatusFilterSchema: z.ZodType<Prisma.EnumDealStatusFilter> = z
    .object({
        equals: z.lazy(() => DealStatusSchema).optional(),
        in: z
            .lazy(() => DealStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => DealStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => DealStatusSchema), z.lazy(() => NestedEnumDealStatusFilterSchema)]).optional()
    })
    .strict()

export default EnumDealStatusFilterSchema
