import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineAccessRuleMinOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineAccessRuleMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        roleId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        teamId: z.lazy(() => SortOrderSchema).optional(),
        accessLevel: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineAccessRuleMinOrderByAggregateInputSchema
