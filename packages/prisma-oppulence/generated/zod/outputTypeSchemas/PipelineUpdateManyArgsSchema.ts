import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineUpdateManyMutationInputSchema } from '../inputTypeSchemas/PipelineUpdateManyMutationInputSchema'
import { PipelineUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PipelineUncheckedUpdateManyInputSchema'
import { PipelineWhereInputSchema } from '../inputTypeSchemas/PipelineWhereInputSchema'

export const PipelineUpdateManyArgsSchema: z.ZodType<Prisma.PipelineUpdateManyArgs> = z
    .object({
        data: z.union([PipelineUpdateManyMutationInputSchema, PipelineUncheckedUpdateManyInputSchema]),
        where: PipelineWhereInputSchema.optional()
    })
    .strict()

export default PipelineUpdateManyArgsSchema
