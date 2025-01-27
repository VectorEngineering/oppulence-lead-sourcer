import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { jackson_indexOrderByRelevanceInputSchema } from './jackson_indexOrderByRelevanceInputSchema'

export const jackson_indexOrderByWithRelationInputSchema: z.ZodType<Prisma.jackson_indexOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        key: z.lazy(() => SortOrderSchema).optional(),
        storeKey: z.lazy(() => SortOrderSchema).optional(),
        _relevance: z.lazy(() => jackson_indexOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default jackson_indexOrderByWithRelationInputSchema
