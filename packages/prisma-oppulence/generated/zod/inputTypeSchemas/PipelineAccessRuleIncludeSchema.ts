import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccessRuleConditionFindManyArgsSchema } from '../outputTypeSchemas/AccessRuleConditionFindManyArgsSchema'
import { PipelineArgsSchema } from '../outputTypeSchemas/PipelineArgsSchema'
import { PipelineAccessRuleCountOutputTypeArgsSchema } from '../outputTypeSchemas/PipelineAccessRuleCountOutputTypeArgsSchema'

export const PipelineAccessRuleIncludeSchema: z.ZodType<Prisma.PipelineAccessRuleInclude> = z
    .object({
        conditions: z.union([z.boolean(), z.lazy(() => AccessRuleConditionFindManyArgsSchema)]).optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineAccessRuleCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default PipelineAccessRuleIncludeSchema
