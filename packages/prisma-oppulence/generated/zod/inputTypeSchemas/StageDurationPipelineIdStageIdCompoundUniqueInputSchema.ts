import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const StageDurationPipelineIdStageIdCompoundUniqueInputSchema: z.ZodType<Prisma.StageDurationPipelineIdStageIdCompoundUniqueInput> =
    z
        .object({
            pipelineId: z.string(),
            stageId: z.string()
        })
        .strict()

export default StageDurationPipelineIdStageIdCompoundUniqueInputSchema
