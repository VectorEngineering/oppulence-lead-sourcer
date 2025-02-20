import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleStatusSchema } from './SaleStatusSchema'

export const NestedEnumSaleStatusFilterSchema: z.ZodType<Prisma.NestedEnumSaleStatusFilter> = z
    .object({
        equals: z.lazy(() => SaleStatusSchema).optional(),
        in: z
            .lazy(() => SaleStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => SaleStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => SaleStatusSchema), z.lazy(() => NestedEnumSaleStatusFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumSaleStatusFilterSchema
