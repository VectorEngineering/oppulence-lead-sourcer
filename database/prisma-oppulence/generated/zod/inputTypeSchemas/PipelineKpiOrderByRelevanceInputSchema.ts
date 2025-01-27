import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiOrderByRelevanceFieldEnumSchema } from './PipelineKpiOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineKpiOrderByRelevanceInputSchema: z.ZodType<Prisma.PipelineKpiOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => PipelineKpiOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PipelineKpiOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PipelineKpiOrderByRelevanceInputSchema
