import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageUpdateWithoutStageDurationInputSchema } from './PipelineStageUpdateWithoutStageDurationInputSchema'
import { PipelineStageUncheckedUpdateWithoutStageDurationInputSchema } from './PipelineStageUncheckedUpdateWithoutStageDurationInputSchema'
import { PipelineStageCreateWithoutStageDurationInputSchema } from './PipelineStageCreateWithoutStageDurationInputSchema'
import { PipelineStageUncheckedCreateWithoutStageDurationInputSchema } from './PipelineStageUncheckedCreateWithoutStageDurationInputSchema'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const PipelineStageUpsertWithoutStageDurationInputSchema: z.ZodType<Prisma.PipelineStageUpsertWithoutStageDurationInput> = z
    .object({
        update: z.union([
            z.lazy(() => PipelineStageUpdateWithoutStageDurationInputSchema),
            z.lazy(() => PipelineStageUncheckedUpdateWithoutStageDurationInputSchema)
        ]),
        create: z.union([
            z.lazy(() => PipelineStageCreateWithoutStageDurationInputSchema),
            z.lazy(() => PipelineStageUncheckedCreateWithoutStageDurationInputSchema)
        ]),
        where: z.lazy(() => PipelineStageWhereInputSchema).optional()
    })
    .strict()

export default PipelineStageUpsertWithoutStageDurationInputSchema
