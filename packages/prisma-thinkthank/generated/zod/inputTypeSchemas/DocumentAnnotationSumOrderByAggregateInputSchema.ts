import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DocumentAnnotationSumOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentAnnotationSumOrderByAggregateInput> = z
    .object({
        pageNumber: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DocumentAnnotationSumOrderByAggregateInputSchema
