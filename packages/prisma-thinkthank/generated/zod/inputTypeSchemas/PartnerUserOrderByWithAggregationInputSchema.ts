import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { PartnerUserCountOrderByAggregateInputSchema } from './PartnerUserCountOrderByAggregateInputSchema'
import { PartnerUserMaxOrderByAggregateInputSchema } from './PartnerUserMaxOrderByAggregateInputSchema'
import { PartnerUserMinOrderByAggregateInputSchema } from './PartnerUserMinOrderByAggregateInputSchema'

export const PartnerUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.PartnerUserOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        partnerId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => PartnerUserCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => PartnerUserMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => PartnerUserMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default PartnerUserOrderByWithAggregationInputSchema
