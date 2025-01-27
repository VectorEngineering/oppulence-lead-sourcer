import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutProjectInputSchema } from './DealCreateWithoutProjectInputSchema'
import { DealUncheckedCreateWithoutProjectInputSchema } from './DealUncheckedCreateWithoutProjectInputSchema'
import { DealCreateOrConnectWithoutProjectInputSchema } from './DealCreateOrConnectWithoutProjectInputSchema'
import { DealUpsertWithWhereUniqueWithoutProjectInputSchema } from './DealUpsertWithWhereUniqueWithoutProjectInputSchema'
import { DealCreateManyProjectInputEnvelopeSchema } from './DealCreateManyProjectInputEnvelopeSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithWhereUniqueWithoutProjectInputSchema } from './DealUpdateWithWhereUniqueWithoutProjectInputSchema'
import { DealUpdateManyWithWhereWithoutProjectInputSchema } from './DealUpdateManyWithWhereWithoutProjectInputSchema'
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema'

export const DealUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.DealUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DealCreateWithoutProjectInputSchema),
                z.lazy(() => DealCreateWithoutProjectInputSchema).array(),
                z.lazy(() => DealUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => DealUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DealCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => DealCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => DealUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => DealUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DealCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => DealUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => DealUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DealUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => DealUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => DealScalarWhereInputSchema), z.lazy(() => DealScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default DealUpdateManyWithoutProjectNestedInputSchema
