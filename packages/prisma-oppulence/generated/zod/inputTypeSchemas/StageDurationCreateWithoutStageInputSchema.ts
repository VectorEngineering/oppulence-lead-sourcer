import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateNestedOneWithoutStageDurationsInputSchema } from './PipelineCreateNestedOneWithoutStageDurationsInputSchema'

export const StageDurationCreateWithoutStageInputSchema: z.ZodType<Prisma.StageDurationCreateWithoutStageInput> = z
    .object({
        id: z.string().cuid().optional(),
        expectedDays: z.number().int(),
        warningDays: z.number().int().optional().nullable(),
        criticalDays: z.number().int().optional().nullable(),
        pipeline: z.lazy(() => PipelineCreateNestedOneWithoutStageDurationsInputSchema)
    })
    .strict()

export default StageDurationCreateWithoutStageInputSchema
