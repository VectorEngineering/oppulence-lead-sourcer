import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InboxLabelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InboxLabelAvgOrderByAggregateInput> = z
    .object({
        priority: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InboxLabelAvgOrderByAggregateInputSchema
