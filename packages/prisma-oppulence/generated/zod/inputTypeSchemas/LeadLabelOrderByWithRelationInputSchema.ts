import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { LeadLabelOrderByRelevanceInputSchema } from './LeadLabelOrderByRelevanceInputSchema'

export const LeadLabelOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadLabelOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        color: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadLabelOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadLabelOrderByWithRelationInputSchema
