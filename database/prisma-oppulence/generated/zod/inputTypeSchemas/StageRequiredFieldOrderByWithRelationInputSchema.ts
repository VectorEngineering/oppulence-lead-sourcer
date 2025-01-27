import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { PipelineStageOrderByWithRelationInputSchema } from './PipelineStageOrderByWithRelationInputSchema'
import { StageRequiredFieldOrderByRelevanceInputSchema } from './StageRequiredFieldOrderByRelevanceInputSchema'

export const StageRequiredFieldOrderByWithRelationInputSchema: z.ZodType<Prisma.StageRequiredFieldOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        stageId: z.lazy(() => SortOrderSchema).optional(),
        fieldName: z.lazy(() => SortOrderSchema).optional(),
        errorMessage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        stage: z.lazy(() => PipelineStageOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => StageRequiredFieldOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default StageRequiredFieldOrderByWithRelationInputSchema
