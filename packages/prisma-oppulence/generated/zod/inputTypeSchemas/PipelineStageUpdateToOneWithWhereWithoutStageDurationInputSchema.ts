import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'
import { PipelineStageUpdateWithoutStageDurationInputSchema } from './PipelineStageUpdateWithoutStageDurationInputSchema'
import { PipelineStageUncheckedUpdateWithoutStageDurationInputSchema } from './PipelineStageUncheckedUpdateWithoutStageDurationInputSchema'

export const PipelineStageUpdateToOneWithWhereWithoutStageDurationInputSchema: z.ZodType<Prisma.PipelineStageUpdateToOneWithWhereWithoutStageDurationInput> =
    z
        .object({
            where: z.lazy(() => PipelineStageWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => PipelineStageUpdateWithoutStageDurationInputSchema),
                z.lazy(() => PipelineStageUncheckedUpdateWithoutStageDurationInputSchema)
            ])
        })
        .strict()

export default PipelineStageUpdateToOneWithWhereWithoutStageDurationInputSchema
