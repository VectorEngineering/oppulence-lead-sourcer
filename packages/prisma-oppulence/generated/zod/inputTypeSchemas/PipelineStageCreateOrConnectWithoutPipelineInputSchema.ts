import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageWhereUniqueInputSchema } from './PipelineStageWhereUniqueInputSchema'
import { PipelineStageCreateWithoutPipelineInputSchema } from './PipelineStageCreateWithoutPipelineInputSchema'
import { PipelineStageUncheckedCreateWithoutPipelineInputSchema } from './PipelineStageUncheckedCreateWithoutPipelineInputSchema'

export const PipelineStageCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineStageCreateOrConnectWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => PipelineStageWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => PipelineStageCreateWithoutPipelineInputSchema),
            z.lazy(() => PipelineStageUncheckedCreateWithoutPipelineInputSchema)
        ])
    })
    .strict()

export default PipelineStageCreateOrConnectWithoutPipelineInputSchema
