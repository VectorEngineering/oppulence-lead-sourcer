import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationSelectSchema } from '../inputTypeSchemas/PipelineAutomationSelectSchema'
import { PipelineAutomationIncludeSchema } from '../inputTypeSchemas/PipelineAutomationIncludeSchema'

export const PipelineAutomationArgsSchema: z.ZodType<Prisma.PipelineAutomationDefaultArgs> = z
    .object({
        select: z.lazy(() => PipelineAutomationSelectSchema).optional(),
        include: z.lazy(() => PipelineAutomationIncludeSchema).optional()
    })
    .strict()

export default PipelineAutomationArgsSchema
