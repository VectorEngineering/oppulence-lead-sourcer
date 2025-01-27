import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { PipelineAccessRuleOrderByWithRelationInputSchema } from './PipelineAccessRuleOrderByWithRelationInputSchema'
import { AccessRuleConditionOrderByRelevanceInputSchema } from './AccessRuleConditionOrderByRelevanceInputSchema'

export const AccessRuleConditionOrderByWithRelationInputSchema: z.ZodType<Prisma.AccessRuleConditionOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        ruleId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        rule: z.lazy(() => PipelineAccessRuleOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => AccessRuleConditionOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default AccessRuleConditionOrderByWithRelationInputSchema
