import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationUpdateWithoutStageInputSchema } from './StageDurationUpdateWithoutStageInputSchema'
import { StageDurationUncheckedUpdateWithoutStageInputSchema } from './StageDurationUncheckedUpdateWithoutStageInputSchema'
import { StageDurationCreateWithoutStageInputSchema } from './StageDurationCreateWithoutStageInputSchema'
import { StageDurationUncheckedCreateWithoutStageInputSchema } from './StageDurationUncheckedCreateWithoutStageInputSchema'
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema'

export const StageDurationUpsertWithoutStageInputSchema: z.ZodType<Prisma.StageDurationUpsertWithoutStageInput> = z
    .object({
        update: z.union([
            z.lazy(() => StageDurationUpdateWithoutStageInputSchema),
            z.lazy(() => StageDurationUncheckedUpdateWithoutStageInputSchema)
        ]),
        create: z.union([
            z.lazy(() => StageDurationCreateWithoutStageInputSchema),
            z.lazy(() => StageDurationUncheckedCreateWithoutStageInputSchema)
        ]),
        where: z.lazy(() => StageDurationWhereInputSchema).optional()
    })
    .strict()

export default StageDurationUpsertWithoutStageInputSchema
