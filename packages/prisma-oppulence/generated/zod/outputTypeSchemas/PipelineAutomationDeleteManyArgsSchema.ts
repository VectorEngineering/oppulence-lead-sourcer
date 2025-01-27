import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationWhereInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereInputSchema'

export const PipelineAutomationDeleteManyArgsSchema: z.ZodType<Prisma.PipelineAutomationDeleteManyArgs> = z
    .object({
        where: PipelineAutomationWhereInputSchema.optional()
    })
    .strict()

export default PipelineAutomationDeleteManyArgsSchema
