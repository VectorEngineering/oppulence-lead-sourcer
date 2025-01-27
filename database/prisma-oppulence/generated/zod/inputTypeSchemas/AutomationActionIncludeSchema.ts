import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationArgsSchema } from '../outputTypeSchemas/PipelineAutomationArgsSchema'

export const AutomationActionIncludeSchema: z.ZodType<Prisma.AutomationActionInclude> = z
    .object({
        automation: z.union([z.boolean(), z.lazy(() => PipelineAutomationArgsSchema)]).optional()
    })
    .strict()

export default AutomationActionIncludeSchema
