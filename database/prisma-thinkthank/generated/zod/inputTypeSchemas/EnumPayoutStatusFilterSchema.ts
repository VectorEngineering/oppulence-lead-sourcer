import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutStatusSchema } from './PayoutStatusSchema'
import { NestedEnumPayoutStatusFilterSchema } from './NestedEnumPayoutStatusFilterSchema'

export const EnumPayoutStatusFilterSchema: z.ZodType<Prisma.EnumPayoutStatusFilter> = z
    .object({
        equals: z.lazy(() => PayoutStatusSchema).optional(),
        in: z
            .lazy(() => PayoutStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PayoutStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => PayoutStatusSchema), z.lazy(() => NestedEnumPayoutStatusFilterSchema)]).optional()
    })
    .strict()

export default EnumPayoutStatusFilterSchema
