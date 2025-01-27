import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationCountOutputTypeSelectSchema } from './PipelineAutomationCountOutputTypeSelectSchema'

export const PipelineAutomationCountOutputTypeArgsSchema: z.ZodType<Prisma.PipelineAutomationCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => PipelineAutomationCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default PipelineAutomationCountOutputTypeSelectSchema
