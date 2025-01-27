import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleWhereInputSchema } from './PipelineAccessRuleWhereInputSchema'

export const PipelineAccessRuleListRelationFilterSchema: z.ZodType<Prisma.PipelineAccessRuleListRelationFilter> = z
    .object({
        every: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional(),
        some: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional(),
        none: z.lazy(() => PipelineAccessRuleWhereInputSchema).optional()
    })
    .strict()

export default PipelineAccessRuleListRelationFilterSchema
