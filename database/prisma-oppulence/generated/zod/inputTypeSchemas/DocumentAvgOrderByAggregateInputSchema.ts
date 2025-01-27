import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DocumentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentAvgOrderByAggregateInput> = z
    .object({
        size: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DocumentAvgOrderByAggregateInputSchema
