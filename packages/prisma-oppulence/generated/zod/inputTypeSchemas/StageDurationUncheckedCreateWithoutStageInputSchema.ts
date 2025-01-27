import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const StageDurationUncheckedCreateWithoutStageInputSchema: z.ZodType<Prisma.StageDurationUncheckedCreateWithoutStageInput> = z
    .object({
        id: z.string().cuid().optional(),
        pipelineId: z.string(),
        expectedDays: z.number().int(),
        warningDays: z.number().int().optional().nullable(),
        criticalDays: z.number().int().optional().nullable()
    })
    .strict()

export default StageDurationUncheckedCreateWithoutStageInputSchema
