import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutProjectInputSchema } from './PipelineCreateWithoutProjectInputSchema'
import { PipelineUncheckedCreateWithoutProjectInputSchema } from './PipelineUncheckedCreateWithoutProjectInputSchema'
import { PipelineCreateOrConnectWithoutProjectInputSchema } from './PipelineCreateOrConnectWithoutProjectInputSchema'
import { PipelineUpsertWithWhereUniqueWithoutProjectInputSchema } from './PipelineUpsertWithWhereUniqueWithoutProjectInputSchema'
import { PipelineCreateManyProjectInputEnvelopeSchema } from './PipelineCreateManyProjectInputEnvelopeSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineUpdateWithWhereUniqueWithoutProjectInputSchema } from './PipelineUpdateWithWhereUniqueWithoutProjectInputSchema'
import { PipelineUpdateManyWithWhereWithoutProjectInputSchema } from './PipelineUpdateManyWithWhereWithoutProjectInputSchema'
import { PipelineScalarWhereInputSchema } from './PipelineScalarWhereInputSchema'

export const PipelineUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.PipelineUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineCreateWithoutProjectInputSchema),
                    z.lazy(() => PipelineCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => PipelineUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => PipelineUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PipelineCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => PipelineCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => PipelineUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => PipelineUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PipelineCreateManyProjectInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => PipelineWhereUniqueInputSchema), z.lazy(() => PipelineWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => PipelineWhereUniqueInputSchema), z.lazy(() => PipelineWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => PipelineWhereUniqueInputSchema), z.lazy(() => PipelineWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => PipelineWhereUniqueInputSchema), z.lazy(() => PipelineWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => PipelineUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => PipelineUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => PipelineUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => PipelineUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => PipelineScalarWhereInputSchema), z.lazy(() => PipelineScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default PipelineUncheckedUpdateManyWithoutProjectNestedInputSchema
