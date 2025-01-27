import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema'
import { PipelineStageUpdateWithoutPipelineInputSchema } from './PipelineStageUpdateWithoutPipelineInputSchema'
import { PipelineStageUncheckedUpdateWithoutPipelineInputSchema } from './PipelineStageUncheckedUpdateWithoutPipelineInputSchema'

export const PipelineStageUpdateWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineStageUpdateWithWhereUniqueWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineStageWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => PipelineStageUpdateWithoutPipelineInputSchema),
                z.lazy(() => PipelineStageUncheckedUpdateWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineStageUpdateWithWhereUniqueWithoutPipelineInputSchema
