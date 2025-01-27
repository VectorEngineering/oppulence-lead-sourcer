import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealOrderByWithRelationInputSchema } from './DealOrderByWithRelationInputSchema'
import { DealHistoryOrderByRelevanceInputSchema } from './DealHistoryOrderByRelevanceInputSchema'

export const DealHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.DealHistoryOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        oldValue: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        newValue: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        deal: z.lazy(() => DealOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => DealHistoryOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default DealHistoryOrderByWithRelationInputSchema
