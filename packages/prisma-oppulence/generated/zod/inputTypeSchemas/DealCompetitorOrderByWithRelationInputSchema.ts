import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealOrderByWithRelationInputSchema } from './DealOrderByWithRelationInputSchema'
import { DealCompetitorOrderByRelevanceInputSchema } from './DealCompetitorOrderByRelevanceInputSchema'

export const DealCompetitorOrderByWithRelationInputSchema: z.ZodType<Prisma.DealCompetitorOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        strengths: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        weaknesses: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        strategy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        threatLevel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        deal: z.lazy(() => DealOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => DealCompetitorOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default DealCompetitorOrderByWithRelationInputSchema
