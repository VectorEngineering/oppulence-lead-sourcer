import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { LeadFeedbackOrderByRelevanceInputSchema } from './LeadFeedbackOrderByRelevanceInputSchema'

export const LeadFeedbackOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadFeedbackOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        source: z.lazy(() => SortOrderSchema).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        sentiment: z.lazy(() => SortOrderSchema).optional(),
        score: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        category: z.lazy(() => SortOrderSchema).optional(),
        subCategory: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        tags: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        requiresFollowUp: z.lazy(() => SortOrderSchema).optional(),
        followUpAssignee: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        followUpStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        followUpNotes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        resolution: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        resolvedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        resolvedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadFeedbackOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadFeedbackOrderByWithRelationInputSchema
