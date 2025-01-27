import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const StageDurationCreateManyPipelineInputSchema: z.ZodType<Prisma.StageDurationCreateManyPipelineInput> = z
    .object({
        id: z.string().cuid().optional(),
        stageId: z.string(),
        expectedDays: z.number().int(),
        warningDays: z.number().int().optional().nullable(),
        criticalDays: z.number().int().optional().nullable()
    })
    .strict()

export default StageDurationCreateManyPipelineInputSchema
