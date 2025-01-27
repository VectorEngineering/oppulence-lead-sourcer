import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiCreateWithoutPipelineInputSchema } from './PipelineKpiCreateWithoutPipelineInputSchema'
import { PipelineKpiUncheckedCreateWithoutPipelineInputSchema } from './PipelineKpiUncheckedCreateWithoutPipelineInputSchema'
import { PipelineKpiCreateOrConnectWithoutPipelineInputSchema } from './PipelineKpiCreateOrConnectWithoutPipelineInputSchema'
import { PipelineKpiUpsertWithWhereUniqueWithoutPipelineInputSchema } from './PipelineKpiUpsertWithWhereUniqueWithoutPipelineInputSchema'
import { PipelineKpiCreateManyPipelineInputEnvelopeSchema } from './PipelineKpiCreateManyPipelineInputEnvelopeSchema'
import { PipelineKpiWhereUniqueInputSchema } from './PipelineKpiWhereUniqueInputSchema'
import { PipelineKpiUpdateWithWhereUniqueWithoutPipelineInputSchema } from './PipelineKpiUpdateWithWhereUniqueWithoutPipelineInputSchema'
import { PipelineKpiUpdateManyWithWhereWithoutPipelineInputSchema } from './PipelineKpiUpdateManyWithWhereWithoutPipelineInputSchema'
import { PipelineKpiScalarWhereInputSchema } from './PipelineKpiScalarWhereInputSchema'

export const PipelineKpiUncheckedUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.PipelineKpiUncheckedUpdateManyWithoutPipelineNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineKpiCreateWithoutPipelineInputSchema),
                    z.lazy(() => PipelineKpiCreateWithoutPipelineInputSchema).array(),
                    z.lazy(() => PipelineKpiUncheckedCreateWithoutPipelineInputSchema),
                    z.lazy(() => PipelineKpiUncheckedCreateWithoutPipelineInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PipelineKpiCreateOrConnectWithoutPipelineInputSchema),
                    z.lazy(() => PipelineKpiCreateOrConnectWithoutPipelineInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => PipelineKpiUpsertWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => PipelineKpiUpsertWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PipelineKpiCreateManyPipelineInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => PipelineKpiWhereUniqueInputSchema), z.lazy(() => PipelineKpiWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => PipelineKpiWhereUniqueInputSchema), z.lazy(() => PipelineKpiWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => PipelineKpiWhereUniqueInputSchema), z.lazy(() => PipelineKpiWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => PipelineKpiWhereUniqueInputSchema), z.lazy(() => PipelineKpiWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => PipelineKpiUpdateWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => PipelineKpiUpdateWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => PipelineKpiUpdateManyWithWhereWithoutPipelineInputSchema),
                    z.lazy(() => PipelineKpiUpdateManyWithWhereWithoutPipelineInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => PipelineKpiScalarWhereInputSchema), z.lazy(() => PipelineKpiScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default PipelineKpiUncheckedUpdateManyWithoutPipelineNestedInputSchema
