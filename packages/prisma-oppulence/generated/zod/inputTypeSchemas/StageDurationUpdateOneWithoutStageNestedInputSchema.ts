import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationCreateWithoutStageInputSchema } from './StageDurationCreateWithoutStageInputSchema'
import { StageDurationUncheckedCreateWithoutStageInputSchema } from './StageDurationUncheckedCreateWithoutStageInputSchema'
import { StageDurationCreateOrConnectWithoutStageInputSchema } from './StageDurationCreateOrConnectWithoutStageInputSchema'
import { StageDurationUpsertWithoutStageInputSchema } from './StageDurationUpsertWithoutStageInputSchema'
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'
import { StageDurationUpdateToOneWithWhereWithoutStageInputSchema } from './StageDurationUpdateToOneWithWhereWithoutStageInputSchema'
import { StageDurationUpdateWithoutStageInputSchema } from './StageDurationUpdateWithoutStageInputSchema'
import { StageDurationUncheckedUpdateWithoutStageInputSchema } from './StageDurationUncheckedUpdateWithoutStageInputSchema'

export const StageDurationUpdateOneWithoutStageNestedInputSchema: z.ZodType<Prisma.StageDurationUpdateOneWithoutStageNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => StageDurationCreateWithoutStageInputSchema),
                z.lazy(() => StageDurationUncheckedCreateWithoutStageInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => StageDurationCreateOrConnectWithoutStageInputSchema).optional(),
        upsert: z.lazy(() => StageDurationUpsertWithoutStageInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => StageDurationWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => StageDurationWhereInputSchema)]).optional(),
        connect: z.lazy(() => StageDurationWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => StageDurationUpdateToOneWithWhereWithoutStageInputSchema),
                z.lazy(() => StageDurationUpdateWithoutStageInputSchema),
                z.lazy(() => StageDurationUncheckedUpdateWithoutStageInputSchema)
            ])
            .optional()
    })
    .strict()

export default StageDurationUpdateOneWithoutStageNestedInputSchema
