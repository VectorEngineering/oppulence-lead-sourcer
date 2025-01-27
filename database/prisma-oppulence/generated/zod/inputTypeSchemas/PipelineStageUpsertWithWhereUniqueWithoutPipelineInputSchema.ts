import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema'
import { PipelineStageUpdateWithoutPipelineInputSchema } from './PipelineStageUpdateWithoutPipelineInputSchema'
import { PipelineStageUncheckedUpdateWithoutPipelineInputSchema } from './PipelineStageUncheckedUpdateWithoutPipelineInputSchema'
import { PipelineStageCreateWithoutPipelineInputSchema } from './PipelineStageCreateWithoutPipelineInputSchema'
import { PipelineStageUncheckedCreateWithoutPipelineInputSchema } from './PipelineStageUncheckedCreateWithoutPipelineInputSchema'

export const PipelineStageUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineStageUpsertWithWhereUniqueWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => PipelineStageWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => PipelineStageUpdateWithoutPipelineInputSchema),
                z.lazy(() => PipelineStageUncheckedUpdateWithoutPipelineInputSchema)
            ]),
            create: z.union([
                z.lazy(() => PipelineStageCreateWithoutPipelineInputSchema),
                z.lazy(() => PipelineStageUncheckedCreateWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default PipelineStageUpsertWithWhereUniqueWithoutPipelineInputSchema
