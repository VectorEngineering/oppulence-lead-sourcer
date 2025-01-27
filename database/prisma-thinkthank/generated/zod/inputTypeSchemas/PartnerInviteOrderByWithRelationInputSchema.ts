import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { PartnerOrderByWithRelationInputSchema } from './PartnerOrderByWithRelationInputSchema'
import { PartnerInviteOrderByRelevanceInputSchema } from './PartnerInviteOrderByRelevanceInputSchema'

export const PartnerInviteOrderByWithRelationInputSchema: z.ZodType<Prisma.PartnerInviteOrderByWithRelationInput> = z
    .object({
        email: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        partnerId: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        partner: z.lazy(() => PartnerOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => PartnerInviteOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default PartnerInviteOrderByWithRelationInputSchema
