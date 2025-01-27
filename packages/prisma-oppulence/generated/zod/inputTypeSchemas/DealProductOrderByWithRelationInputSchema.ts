import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealOrderByWithRelationInputSchema } from './DealOrderByWithRelationInputSchema'
import { DealProductOrderByRelevanceInputSchema } from './DealProductOrderByRelevanceInputSchema'

export const DealProductOrderByWithRelationInputSchema: z.ZodType<Prisma.DealProductOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        productId: z.lazy(() => SortOrderSchema).optional(),
        quantity: z.lazy(() => SortOrderSchema).optional(),
        unitPrice: z.lazy(() => SortOrderSchema).optional(),
        discount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        total: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        deal: z.lazy(() => DealOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => DealProductOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default DealProductOrderByWithRelationInputSchema
