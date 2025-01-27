import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PartnerUserCountOrderByAggregateInputSchema: z.ZodType<Prisma.PartnerUserCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        partnerId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PartnerUserCountOrderByAggregateInputSchema
