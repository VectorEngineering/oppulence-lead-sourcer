import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateWithoutIntegrationInputSchema } from './InstalledIntegrationCreateWithoutIntegrationInputSchema'
import { InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema'
import { InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema } from './InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema'
import { InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInputSchema } from './InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInputSchema'
import { InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema } from './InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInputSchema } from './InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInputSchema'
import { InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInputSchema } from './InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInputSchema'
import { InstalledIntegrationScalarWhereInputSchema } from './InstalledIntegrationScalarWhereInputSchema'

export const InstalledIntegrationUpdateManyWithoutIntegrationNestedInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateManyWithoutIntegrationNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationCreateWithoutIntegrationInputSchema).array(),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationUncheckedCreateWithoutIntegrationInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationCreateOrConnectWithoutIntegrationInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationUpsertWithWhereUniqueWithoutIntegrationInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema).optional(),
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
                    z.lazy(() => InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInputSchema),
                    z.lazy(() => InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInputSchema).array()
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

export default InstalledIntegrationUpdateManyWithoutIntegrationNestedInputSchema
