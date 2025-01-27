import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineSumOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineSumOrderByAggregateInput> = z
    .object({
        pipelineGoal: z.lazy(() => SortOrderSchema).optional(),
        typicalSalesCycle: z.lazy(() => SortOrderSchema).optional(),
        averageDealSize: z.lazy(() => SortOrderSchema).optional(),
        averageCloseRate: z.lazy(() => SortOrderSchema).optional(),
        minimumDealSize: z.lazy(() => SortOrderSchema).optional(),
        maximumDealSize: z.lazy(() => SortOrderSchema).optional(),
        confidenceScore: z.lazy(() => SortOrderSchema).optional(),
        revenueTarget: z.lazy(() => SortOrderSchema).optional(),
        dealCountTarget: z.lazy(() => SortOrderSchema).optional(),
        dataRetention: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineSumOrderByAggregateInputSchema
