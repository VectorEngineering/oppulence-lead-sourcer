import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { LeadDecisionMakerOrderByRelevanceInputSchema } from './LeadDecisionMakerOrderByRelevanceInputSchema'

export const LeadDecisionMakerOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadDecisionMakerOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        phone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        influence: z.lazy(() => SortOrderSchema).optional(),
        notes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadDecisionMakerOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadDecisionMakerOrderByWithRelationInputSchema
