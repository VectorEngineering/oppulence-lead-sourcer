import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateNestedOneWithoutStageDurationsInputSchema } from './PipelineCreateNestedOneWithoutStageDurationsInputSchema'
import { PipelineStageCreateNestedOneWithoutStageDurationInputSchema } from './PipelineStageCreateNestedOneWithoutStageDurationInputSchema'

export const StageDurationCreateInputSchema: z.ZodType<Prisma.StageDurationCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        expectedDays: z.number().int(),
        warningDays: z.number().int().optional().nullable(),
        criticalDays: z.number().int().optional().nullable(),
        pipeline: z.lazy(() => PipelineCreateNestedOneWithoutStageDurationsInputSchema),
        stage: z.lazy(() => PipelineStageCreateNestedOneWithoutStageDurationInputSchema)
    })
    .strict()

export default StageDurationCreateInputSchema
