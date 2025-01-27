import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageOrderByRelevanceFieldEnumSchema } from './PipelineStageOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineStageOrderByRelevanceInputSchema: z.ZodType<Prisma.PipelineStageOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => PipelineStageOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PipelineStageOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PipelineStageOrderByRelevanceInputSchema
