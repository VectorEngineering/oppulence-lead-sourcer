import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { jackson_ttlOrderByRelevanceInputSchema } from './jackson_ttlOrderByRelevanceInputSchema'

export const jackson_ttlOrderByWithRelationInputSchema: z.ZodType<Prisma.jackson_ttlOrderByWithRelationInput> = z
    .object({
        key: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        _relevance: z.lazy(() => jackson_ttlOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default jackson_ttlOrderByWithRelationInputSchema
