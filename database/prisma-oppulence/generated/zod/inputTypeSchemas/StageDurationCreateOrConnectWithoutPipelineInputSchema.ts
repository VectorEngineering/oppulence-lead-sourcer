import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'
import { StageDurationCreateWithoutPipelineInputSchema } from './StageDurationCreateWithoutPipelineInputSchema'
import { StageDurationUncheckedCreateWithoutPipelineInputSchema } from './StageDurationUncheckedCreateWithoutPipelineInputSchema'

export const StageDurationCreateOrConnectWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationCreateOrConnectWithoutPipelineInput> = z
    .object({
        where: z.lazy(() => StageDurationWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => StageDurationCreateWithoutPipelineInputSchema),
            z.lazy(() => StageDurationUncheckedCreateWithoutPipelineInputSchema)
        ])
    })
    .strict()

export default StageDurationCreateOrConnectWithoutPipelineInputSchema
