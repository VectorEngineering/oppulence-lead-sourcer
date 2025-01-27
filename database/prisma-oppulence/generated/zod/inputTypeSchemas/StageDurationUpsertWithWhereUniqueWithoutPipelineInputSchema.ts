import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'
import { StageDurationUpdateWithoutPipelineInputSchema } from './StageDurationUpdateWithoutPipelineInputSchema'
import { StageDurationUncheckedUpdateWithoutPipelineInputSchema } from './StageDurationUncheckedUpdateWithoutPipelineInputSchema'
import { StageDurationCreateWithoutPipelineInputSchema } from './StageDurationCreateWithoutPipelineInputSchema'
import { StageDurationUncheckedCreateWithoutPipelineInputSchema } from './StageDurationUncheckedCreateWithoutPipelineInputSchema'

export const StageDurationUpsertWithWhereUniqueWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationUpsertWithWhereUniqueWithoutPipelineInput> =
    z
        .object({
            where: z.lazy(() => StageDurationWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => StageDurationUpdateWithoutPipelineInputSchema),
                z.lazy(() => StageDurationUncheckedUpdateWithoutPipelineInputSchema)
            ]),
            create: z.union([
                z.lazy(() => StageDurationCreateWithoutPipelineInputSchema),
                z.lazy(() => StageDurationUncheckedCreateWithoutPipelineInputSchema)
            ])
        })
        .strict()

export default StageDurationUpsertWithWhereUniqueWithoutPipelineInputSchema
