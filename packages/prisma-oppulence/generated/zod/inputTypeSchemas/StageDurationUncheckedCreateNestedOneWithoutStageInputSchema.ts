import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationCreateWithoutStageInputSchema } from './StageDurationCreateWithoutStageInputSchema'
import { StageDurationUncheckedCreateWithoutStageInputSchema } from './StageDurationUncheckedCreateWithoutStageInputSchema'
import { StageDurationCreateOrConnectWithoutStageInputSchema } from './StageDurationCreateOrConnectWithoutStageInputSchema'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'

export const StageDurationUncheckedCreateNestedOneWithoutStageInputSchema: z.ZodType<Prisma.StageDurationUncheckedCreateNestedOneWithoutStageInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => StageDurationCreateWithoutStageInputSchema),
                    z.lazy(() => StageDurationUncheckedCreateWithoutStageInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => StageDurationCreateOrConnectWithoutStageInputSchema).optional(),
            connect: z.lazy(() => StageDurationWhereUniqueInputSchema).optional()
        })
        .strict()

export default StageDurationUncheckedCreateNestedOneWithoutStageInputSchema
