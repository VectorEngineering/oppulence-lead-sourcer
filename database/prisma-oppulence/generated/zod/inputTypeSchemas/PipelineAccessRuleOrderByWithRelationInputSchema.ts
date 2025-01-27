import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { AccessRuleConditionOrderByRelationAggregateInputSchema } from './AccessRuleConditionOrderByRelationAggregateInputSchema'
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema'
import { PipelineAccessRuleOrderByRelevanceInputSchema } from './PipelineAccessRuleOrderByRelevanceInputSchema'

export const PipelineAccessRuleOrderByWithRelationInputSchema: z.ZodType<Prisma.PipelineAccessRuleOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        roleId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        teamId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        accessLevel: z.lazy(() => SortOrderSchema).optional(),
        conditions: z.lazy(() => AccessRuleConditionOrderByRelationAggregateInputSchema).optional(),
        pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => PipelineAccessRuleOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default PipelineAccessRuleOrderByWithRelationInputSchema
