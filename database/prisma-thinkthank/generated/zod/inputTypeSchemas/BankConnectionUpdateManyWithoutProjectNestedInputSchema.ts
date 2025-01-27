import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionCreateWithoutProjectInputSchema } from './BankConnectionCreateWithoutProjectInputSchema'
import { BankConnectionUncheckedCreateWithoutProjectInputSchema } from './BankConnectionUncheckedCreateWithoutProjectInputSchema'
import { BankConnectionCreateOrConnectWithoutProjectInputSchema } from './BankConnectionCreateOrConnectWithoutProjectInputSchema'
import { BankConnectionUpsertWithWhereUniqueWithoutProjectInputSchema } from './BankConnectionUpsertWithWhereUniqueWithoutProjectInputSchema'
import { BankConnectionCreateManyProjectInputEnvelopeSchema } from './BankConnectionCreateManyProjectInputEnvelopeSchema'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionUpdateWithWhereUniqueWithoutProjectInputSchema } from './BankConnectionUpdateWithWhereUniqueWithoutProjectInputSchema'
import { BankConnectionUpdateManyWithWhereWithoutProjectInputSchema } from './BankConnectionUpdateManyWithWhereWithoutProjectInputSchema'
import { BankConnectionScalarWhereInputSchema } from './BankConnectionScalarWhereInputSchema'

export const BankConnectionUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.BankConnectionUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankConnectionCreateWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => BankConnectionCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => BankConnectionUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => BankConnectionCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => BankConnectionWhereUniqueInputSchema), z.lazy(() => BankConnectionWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => BankConnectionWhereUniqueInputSchema), z.lazy(() => BankConnectionWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => BankConnectionWhereUniqueInputSchema), z.lazy(() => BankConnectionWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => BankConnectionWhereUniqueInputSchema), z.lazy(() => BankConnectionWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => BankConnectionUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => BankConnectionUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => BankConnectionUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => BankConnectionScalarWhereInputSchema), z.lazy(() => BankConnectionScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default BankConnectionUpdateManyWithoutProjectNestedInputSchema
