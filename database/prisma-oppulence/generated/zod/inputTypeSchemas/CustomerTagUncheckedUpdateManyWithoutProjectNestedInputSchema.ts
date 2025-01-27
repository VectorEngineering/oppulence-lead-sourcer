import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagCreateWithoutProjectInputSchema } from './CustomerTagCreateWithoutProjectInputSchema'
import { CustomerTagUncheckedCreateWithoutProjectInputSchema } from './CustomerTagUncheckedCreateWithoutProjectInputSchema'
import { CustomerTagCreateOrConnectWithoutProjectInputSchema } from './CustomerTagCreateOrConnectWithoutProjectInputSchema'
import { CustomerTagUpsertWithWhereUniqueWithoutProjectInputSchema } from './CustomerTagUpsertWithWhereUniqueWithoutProjectInputSchema'
import { CustomerTagCreateManyProjectInputEnvelopeSchema } from './CustomerTagCreateManyProjectInputEnvelopeSchema'
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema'
import { CustomerTagUpdateWithWhereUniqueWithoutProjectInputSchema } from './CustomerTagUpdateWithWhereUniqueWithoutProjectInputSchema'
import { CustomerTagUpdateManyWithWhereWithoutProjectInputSchema } from './CustomerTagUpdateManyWithWhereWithoutProjectInputSchema'
import { CustomerTagScalarWhereInputSchema } from './CustomerTagScalarWhereInputSchema'

export const CustomerTagUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.CustomerTagUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => CustomerTagCreateWithoutProjectInputSchema),
                    z.lazy(() => CustomerTagCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => CustomerTagUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => CustomerTagUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => CustomerTagCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => CustomerTagCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => CustomerTagUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => CustomerTagUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => CustomerTagCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => CustomerTagWhereUniqueInputSchema), z.lazy(() => CustomerTagWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => CustomerTagWhereUniqueInputSchema), z.lazy(() => CustomerTagWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => CustomerTagWhereUniqueInputSchema), z.lazy(() => CustomerTagWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => CustomerTagWhereUniqueInputSchema), z.lazy(() => CustomerTagWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => CustomerTagUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => CustomerTagUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => CustomerTagUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => CustomerTagUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => CustomerTagScalarWhereInputSchema), z.lazy(() => CustomerTagScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default CustomerTagUncheckedUpdateManyWithoutProjectNestedInputSchema
