import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LinkTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LinkTagMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        linkId: z.lazy(() => SortOrderSchema).optional(),
        tagId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LinkTagMaxOrderByAggregateInputSchema
