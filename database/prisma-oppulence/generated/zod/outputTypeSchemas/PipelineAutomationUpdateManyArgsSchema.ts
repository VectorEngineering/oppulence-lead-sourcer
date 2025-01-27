import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationUpdateManyMutationInputSchema } from '../inputTypeSchemas/PipelineAutomationUpdateManyMutationInputSchema'
import { PipelineAutomationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PipelineAutomationUncheckedUpdateManyInputSchema'
import { PipelineAutomationWhereInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereInputSchema'

export const PipelineAutomationUpdateManyArgsSchema: z.ZodType<Prisma.PipelineAutomationUpdateManyArgs> = z
    .object({
        data: z.union([PipelineAutomationUpdateManyMutationInputSchema, PipelineAutomationUncheckedUpdateManyInputSchema]),
        where: PipelineAutomationWhereInputSchema.optional()
    })
    .strict()

export default PipelineAutomationUpdateManyArgsSchema
