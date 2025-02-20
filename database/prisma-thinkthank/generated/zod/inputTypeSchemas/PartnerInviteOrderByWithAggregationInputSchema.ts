import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { PartnerInviteCountOrderByAggregateInputSchema } from './PartnerInviteCountOrderByAggregateInputSchema'
import { PartnerInviteMaxOrderByAggregateInputSchema } from './PartnerInviteMaxOrderByAggregateInputSchema'
import { PartnerInviteMinOrderByAggregateInputSchema } from './PartnerInviteMinOrderByAggregateInputSchema'

export const PartnerInviteOrderByWithAggregationInputSchema: z.ZodType<Prisma.PartnerInviteOrderByWithAggregationInput> = z
    .object({
        email: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        partnerId: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => PartnerInviteCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => PartnerInviteMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => PartnerInviteMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default PartnerInviteOrderByWithAggregationInputSchema
