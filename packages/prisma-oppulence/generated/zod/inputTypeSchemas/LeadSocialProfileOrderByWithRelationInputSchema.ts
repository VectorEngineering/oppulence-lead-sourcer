import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { LeadSocialProfileOrderByRelevanceInputSchema } from './LeadSocialProfileOrderByRelevanceInputSchema'

export const LeadSocialProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadSocialProfileOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        platform: z.lazy(() => SortOrderSchema).optional(),
        profileUrl: z.lazy(() => SortOrderSchema).optional(),
        username: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastSynced: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadSocialProfileOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadSocialProfileOrderByWithRelationInputSchema
