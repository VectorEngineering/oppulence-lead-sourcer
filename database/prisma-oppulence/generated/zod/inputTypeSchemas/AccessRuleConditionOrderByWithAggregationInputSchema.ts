import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { AccessRuleConditionCountOrderByAggregateInputSchema } from './AccessRuleConditionCountOrderByAggregateInputSchema'
import { AccessRuleConditionMaxOrderByAggregateInputSchema } from './AccessRuleConditionMaxOrderByAggregateInputSchema'
import { AccessRuleConditionMinOrderByAggregateInputSchema } from './AccessRuleConditionMinOrderByAggregateInputSchema'

export const AccessRuleConditionOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccessRuleConditionOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        ruleId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => AccessRuleConditionCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => AccessRuleConditionMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => AccessRuleConditionMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default AccessRuleConditionOrderByWithAggregationInputSchema
