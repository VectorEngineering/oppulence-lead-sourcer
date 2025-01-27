import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema'
import { PipelineIntegrationOrderByRelevanceInputSchema } from './PipelineIntegrationOrderByRelevanceInputSchema'

export const PipelineIntegrationOrderByWithRelationInputSchema: z.ZodType<Prisma.PipelineIntegrationOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        provider: z.lazy(() => SortOrderSchema).optional(),
        config: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        lastSyncedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => PipelineIntegrationOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default PipelineIntegrationOrderByWithRelationInputSchema
