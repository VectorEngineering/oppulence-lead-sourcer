import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const WorkflowSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkflowSumOrderByAggregateInput> = z
    .object({
        creditsCost: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default WorkflowSumOrderByAggregateInputSchema
