import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleOrderByRelevanceFieldEnumSchema } from './PipelineAccessRuleOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineAccessRuleOrderByRelevanceInputSchema: z.ZodType<Prisma.PipelineAccessRuleOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => PipelineAccessRuleOrderByRelevanceFieldEnumSchema),
            z.lazy(() => PipelineAccessRuleOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default PipelineAccessRuleOrderByRelevanceInputSchema
