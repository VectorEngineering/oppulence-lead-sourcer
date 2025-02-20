import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutProjectInputSchema } from './InstalledIntegrationCreateWithoutProjectInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutProjectInputSchema } from './InstalledIntegrationUncheckedCreateWithoutProjectInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutProjectInputSchema } from './InstalledIntegrationCreateOrConnectWithoutProjectInputSchema'
import { InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInputSchema } from './InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInputSchema'
import { InstalledIntegrationCreateManyProjectInputEnvelopeSchema } from './InstalledIntegrationCreateManyProjectInputEnvelopeSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInputSchema } from './InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInputSchema'
import { InstalledIntegrationUpdateManyWithWhereWithoutProjectInputSchema } from './InstalledIntegrationUpdateManyWithWhereWithoutProjectInputSchema'
import { InstalledIntegrationScalarWhereInputSchema } from './InstalledIntegrationScalarWhereInputSchema'

export const InstalledIntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.InstalledIntegrationUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InstalledIntegrationCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
                    z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => InstalledIntegrationUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => InstalledIntegrationUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => InstalledIntegrationScalarWhereInputSchema),
                    z.lazy(() => InstalledIntegrationScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default InstalledIntegrationUncheckedUpdateManyWithoutProjectNestedInputSchema
