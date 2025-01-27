import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { StageRequiredFieldCountOrderByAggregateInputSchema } from './StageRequiredFieldCountOrderByAggregateInputSchema'
import { StageRequiredFieldMaxOrderByAggregateInputSchema } from './StageRequiredFieldMaxOrderByAggregateInputSchema'
import { StageRequiredFieldMinOrderByAggregateInputSchema } from './StageRequiredFieldMinOrderByAggregateInputSchema'

export const StageRequiredFieldOrderByWithAggregationInputSchema: z.ZodType<Prisma.StageRequiredFieldOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        stageId: z.lazy(() => SortOrderSchema).optional(),
        fieldName: z.lazy(() => SortOrderSchema).optional(),
        errorMessage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => StageRequiredFieldCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => StageRequiredFieldMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => StageRequiredFieldMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default StageRequiredFieldOrderByWithAggregationInputSchema
