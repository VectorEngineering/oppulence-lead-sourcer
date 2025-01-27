import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineKpiWhereInputSchema } from '../inputTypeSchemas/PipelineKpiWhereInputSchema'

export const PipelineKpiDeleteManyArgsSchema: z.ZodType<Prisma.PipelineKpiDeleteManyArgs> = z
    .object({
        where: PipelineKpiWhereInputSchema.optional()
    })
    .strict()

export default PipelineKpiDeleteManyArgsSchema
