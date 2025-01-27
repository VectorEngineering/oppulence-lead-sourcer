import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardCreateWithoutProjectInputSchema } from './DashboardCreateWithoutProjectInputSchema'
import { DashboardUncheckedCreateWithoutProjectInputSchema } from './DashboardUncheckedCreateWithoutProjectInputSchema'
import { DashboardCreateOrConnectWithoutProjectInputSchema } from './DashboardCreateOrConnectWithoutProjectInputSchema'
import { DashboardUpsertWithWhereUniqueWithoutProjectInputSchema } from './DashboardUpsertWithWhereUniqueWithoutProjectInputSchema'
import { DashboardCreateManyProjectInputEnvelopeSchema } from './DashboardCreateManyProjectInputEnvelopeSchema'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'
import { DashboardUpdateWithWhereUniqueWithoutProjectInputSchema } from './DashboardUpdateWithWhereUniqueWithoutProjectInputSchema'
import { DashboardUpdateManyWithWhereWithoutProjectInputSchema } from './DashboardUpdateManyWithWhereWithoutProjectInputSchema'
import { DashboardScalarWhereInputSchema } from './DashboardScalarWhereInputSchema'

export const DashboardUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.DashboardUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DashboardCreateWithoutProjectInputSchema),
                z.lazy(() => DashboardCreateWithoutProjectInputSchema).array(),
                z.lazy(() => DashboardUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => DashboardUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DashboardCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => DashboardCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => DashboardUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => DashboardUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DashboardCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => DashboardWhereUniqueInputSchema), z.lazy(() => DashboardWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => DashboardWhereUniqueInputSchema), z.lazy(() => DashboardWhereUniqueInputSchema).array()])
            .optional(),
        delete: z.union([z.lazy(() => DashboardWhereUniqueInputSchema), z.lazy(() => DashboardWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => DashboardWhereUniqueInputSchema), z.lazy(() => DashboardWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => DashboardUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => DashboardUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DashboardUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => DashboardUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => DashboardScalarWhereInputSchema), z.lazy(() => DashboardScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default DashboardUpdateManyWithoutProjectNestedInputSchema
