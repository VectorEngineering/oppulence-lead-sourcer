import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineIntegrationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PipelineIntegrationOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineIntegrationOrderByRelationAggregateInputSchema
