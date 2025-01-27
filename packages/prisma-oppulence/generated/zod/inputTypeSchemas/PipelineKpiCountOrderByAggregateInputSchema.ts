import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineKpiCountOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineKpiCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        target: z.lazy(() => SortOrderSchema).optional(),
        current: z.lazy(() => SortOrderSchema).optional(),
        unit: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        frequency: z.lazy(() => SortOrderSchema).optional(),
        calculation: z.lazy(() => SortOrderSchema).optional(),
        formula: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineKpiCountOrderByAggregateInputSchema
