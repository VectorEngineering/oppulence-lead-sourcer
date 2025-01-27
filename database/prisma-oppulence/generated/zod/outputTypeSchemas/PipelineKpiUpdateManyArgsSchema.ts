import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineKpiUpdateManyMutationInputSchema } from '../inputTypeSchemas/PipelineKpiUpdateManyMutationInputSchema'
import { PipelineKpiUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PipelineKpiUncheckedUpdateManyInputSchema'
import { PipelineKpiWhereInputSchema } from '../inputTypeSchemas/PipelineKpiWhereInputSchema'

export const PipelineKpiUpdateManyArgsSchema: z.ZodType<Prisma.PipelineKpiUpdateManyArgs> = z
    .object({
        data: z.union([PipelineKpiUpdateManyMutationInputSchema, PipelineKpiUncheckedUpdateManyInputSchema]),
        where: PipelineKpiWhereInputSchema.optional()
    })
    .strict()

export default PipelineKpiUpdateManyArgsSchema
