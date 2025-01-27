import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineWhereInputSchema } from '../inputTypeSchemas/PipelineWhereInputSchema'

export const PipelineDeleteManyArgsSchema: z.ZodType<Prisma.PipelineDeleteManyArgs> = z
    .object({
        where: PipelineWhereInputSchema.optional()
    })
    .strict()

export default PipelineDeleteManyArgsSchema
