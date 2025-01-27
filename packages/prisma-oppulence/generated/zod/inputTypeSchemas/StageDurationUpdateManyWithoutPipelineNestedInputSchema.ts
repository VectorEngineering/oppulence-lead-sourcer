import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationCreateWithoutPipelineInputSchema } from './StageDurationCreateWithoutPipelineInputSchema'
import { StageDurationUncheckedCreateWithoutPipelineInputSchema } from './StageDurationUncheckedCreateWithoutPipelineInputSchema'
import { StageDurationCreateOrConnectWithoutPipelineInputSchema } from './StageDurationCreateOrConnectWithoutPipelineInputSchema'
import { StageDurationUpsertWithWhereUniqueWithoutPipelineInputSchema } from './StageDurationUpsertWithWhereUniqueWithoutPipelineInputSchema'
import { StageDurationCreateManyPipelineInputEnvelopeSchema } from './StageDurationCreateManyPipelineInputEnvelopeSchema'
import { StageDurationWhereUniqueInputSchema } from './StageDurationWhereUniqueInputSchema'
import { StageDurationUpdateWithWhereUniqueWithoutPipelineInputSchema } from './StageDurationUpdateWithWhereUniqueWithoutPipelineInputSchema'
import { StageDurationUpdateManyWithWhereWithoutPipelineInputSchema } from './StageDurationUpdateManyWithWhereWithoutPipelineInputSchema'
import { StageDurationScalarWhereInputSchema } from './StageDurationScalarWhereInputSchema'

export const StageDurationUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.StageDurationUpdateManyWithoutPipelineNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => StageDurationCreateWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationCreateWithoutPipelineInputSchema).array(),
                    z.lazy(() => StageDurationUncheckedCreateWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationUncheckedCreateWithoutPipelineInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => StageDurationCreateOrConnectWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationCreateOrConnectWithoutPipelineInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => StageDurationUpsertWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationUpsertWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => StageDurationCreateManyPipelineInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => StageDurationWhereUniqueInputSchema), z.lazy(() => StageDurationWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => StageDurationWhereUniqueInputSchema), z.lazy(() => StageDurationWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => StageDurationWhereUniqueInputSchema), z.lazy(() => StageDurationWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => StageDurationWhereUniqueInputSchema), z.lazy(() => StageDurationWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => StageDurationUpdateWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationUpdateWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => StageDurationUpdateManyWithWhereWithoutPipelineInputSchema),
                    z.lazy(() => StageDurationUpdateManyWithWhereWithoutPipelineInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => StageDurationScalarWhereInputSchema), z.lazy(() => StageDurationScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default StageDurationUpdateManyWithoutPipelineNestedInputSchema
