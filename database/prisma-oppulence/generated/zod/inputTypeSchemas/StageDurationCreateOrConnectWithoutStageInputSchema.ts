import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'
import { StageDurationCreateWithoutStageInputSchema } from './StageDurationCreateWithoutStageInputSchema'
import { StageDurationUncheckedCreateWithoutStageInputSchema } from './StageDurationUncheckedCreateWithoutStageInputSchema'

export const StageDurationCreateOrConnectWithoutStageInputSchema: z.ZodType<Prisma.StageDurationCreateOrConnectWithoutStageInput> = z
    .object({
        where: z.lazy(() => StageDurationWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => StageDurationCreateWithoutStageInputSchema),
            z.lazy(() => StageDurationUncheckedCreateWithoutStageInputSchema)
        ])
    })
    .strict()

export default StageDurationCreateOrConnectWithoutStageInputSchema
