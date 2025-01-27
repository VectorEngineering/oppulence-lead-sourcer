import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { LeadTimelineOrderByRelevanceInputSchema } from './LeadTimelineOrderByRelevanceInputSchema'

export const LeadTimelineOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadTimelineOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        milestone: z.lazy(() => SortOrderSchema).optional(),
        targetDate: z.lazy(() => SortOrderSchema).optional(),
        actualDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        notes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadTimelineOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadTimelineOrderByWithRelationInputSchema
