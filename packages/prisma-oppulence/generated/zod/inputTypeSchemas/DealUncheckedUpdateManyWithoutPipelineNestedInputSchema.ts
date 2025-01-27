import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutPipelineInputSchema } from './DealCreateWithoutPipelineInputSchema'
import { DealUncheckedCreateWithoutPipelineInputSchema } from './DealUncheckedCreateWithoutPipelineInputSchema'
import { DealCreateOrConnectWithoutPipelineInputSchema } from './DealCreateOrConnectWithoutPipelineInputSchema'
import { DealUpsertWithWhereUniqueWithoutPipelineInputSchema } from './DealUpsertWithWhereUniqueWithoutPipelineInputSchema'
import { DealCreateManyPipelineInputEnvelopeSchema } from './DealCreateManyPipelineInputEnvelopeSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithWhereUniqueWithoutPipelineInputSchema } from './DealUpdateWithWhereUniqueWithoutPipelineInputSchema'
import { DealUpdateManyWithWhereWithoutPipelineInputSchema } from './DealUpdateManyWithWhereWithoutPipelineInputSchema'
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema'

export const DealUncheckedUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.DealUncheckedUpdateManyWithoutPipelineNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DealCreateWithoutPipelineInputSchema),
                    z.lazy(() => DealCreateWithoutPipelineInputSchema).array(),
                    z.lazy(() => DealUncheckedCreateWithoutPipelineInputSchema),
                    z.lazy(() => DealUncheckedCreateWithoutPipelineInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DealCreateOrConnectWithoutPipelineInputSchema),
                    z.lazy(() => DealCreateOrConnectWithoutPipelineInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => DealUpsertWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => DealUpsertWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DealCreateManyPipelineInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
            disconnect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
            delete: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => DealUpdateWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => DealUpdateWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => DealUpdateManyWithWhereWithoutPipelineInputSchema),
                    z.lazy(() => DealUpdateManyWithWhereWithoutPipelineInputSchema).array()
                ])
                .optional(),
            deleteMany: z.union([z.lazy(() => DealScalarWhereInputSchema), z.lazy(() => DealScalarWhereInputSchema).array()]).optional()
        })
        .strict()

export default DealUncheckedUpdateManyWithoutPipelineNestedInputSchema
