import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppCreateWithoutProjectInputSchema } from './AppCreateWithoutProjectInputSchema'
import { AppUncheckedCreateWithoutProjectInputSchema } from './AppUncheckedCreateWithoutProjectInputSchema'
import { AppCreateOrConnectWithoutProjectInputSchema } from './AppCreateOrConnectWithoutProjectInputSchema'
import { AppUpsertWithWhereUniqueWithoutProjectInputSchema } from './AppUpsertWithWhereUniqueWithoutProjectInputSchema'
import { AppCreateManyProjectInputEnvelopeSchema } from './AppCreateManyProjectInputEnvelopeSchema'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppUpdateWithWhereUniqueWithoutProjectInputSchema } from './AppUpdateWithWhereUniqueWithoutProjectInputSchema'
import { AppUpdateManyWithWhereWithoutProjectInputSchema } from './AppUpdateManyWithWhereWithoutProjectInputSchema'
import { AppScalarWhereInputSchema } from './AppScalarWhereInputSchema'

export const AppUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.AppUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => AppCreateWithoutProjectInputSchema),
                z.lazy(() => AppCreateWithoutProjectInputSchema).array(),
                z.lazy(() => AppUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => AppUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => AppCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => AppCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => AppUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => AppUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => AppCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => AppWhereUniqueInputSchema), z.lazy(() => AppWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => AppWhereUniqueInputSchema), z.lazy(() => AppWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => AppWhereUniqueInputSchema), z.lazy(() => AppWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => AppWhereUniqueInputSchema), z.lazy(() => AppWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => AppUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => AppUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => AppUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => AppUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => AppScalarWhereInputSchema), z.lazy(() => AppScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default AppUpdateManyWithoutProjectNestedInputSchema
