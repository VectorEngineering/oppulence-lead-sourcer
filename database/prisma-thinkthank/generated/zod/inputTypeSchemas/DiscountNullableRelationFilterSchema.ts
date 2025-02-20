import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DiscountWhereInputSchema } from './DiscountWhereInputSchema'

export const DiscountNullableRelationFilterSchema: z.ZodType<Prisma.DiscountNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => DiscountWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => DiscountWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default DiscountNullableRelationFilterSchema
