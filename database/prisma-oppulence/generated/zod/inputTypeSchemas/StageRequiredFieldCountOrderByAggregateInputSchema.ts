import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const StageRequiredFieldCountOrderByAggregateInputSchema: z.ZodType<Prisma.StageRequiredFieldCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        stageId: z.lazy(() => SortOrderSchema).optional(),
        fieldName: z.lazy(() => SortOrderSchema).optional(),
        errorMessage: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default StageRequiredFieldCountOrderByAggregateInputSchema
