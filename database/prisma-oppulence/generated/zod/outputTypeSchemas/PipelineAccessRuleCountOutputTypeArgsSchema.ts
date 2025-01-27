import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAccessRuleCountOutputTypeSelectSchema } from './PipelineAccessRuleCountOutputTypeSelectSchema'

export const PipelineAccessRuleCountOutputTypeArgsSchema: z.ZodType<Prisma.PipelineAccessRuleCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => PipelineAccessRuleCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default PipelineAccessRuleCountOutputTypeSelectSchema
