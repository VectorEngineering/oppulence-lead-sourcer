import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateWithoutProjectInputSchema } from './BankAccountCreateWithoutProjectInputSchema'
import { BankAccountUncheckedCreateWithoutProjectInputSchema } from './BankAccountUncheckedCreateWithoutProjectInputSchema'
import { BankAccountCreateOrConnectWithoutProjectInputSchema } from './BankAccountCreateOrConnectWithoutProjectInputSchema'
import { BankAccountUpsertWithWhereUniqueWithoutProjectInputSchema } from './BankAccountUpsertWithWhereUniqueWithoutProjectInputSchema'
import { BankAccountCreateManyProjectInputEnvelopeSchema } from './BankAccountCreateManyProjectInputEnvelopeSchema'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateWithWhereUniqueWithoutProjectInputSchema } from './BankAccountUpdateWithWhereUniqueWithoutProjectInputSchema'
import { BankAccountUpdateManyWithWhereWithoutProjectInputSchema } from './BankAccountUpdateManyWithWhereWithoutProjectInputSchema'
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema'

export const BankAccountUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.BankAccountUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankAccountCreateWithoutProjectInputSchema),
                    z.lazy(() => BankAccountCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => BankAccountUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => BankAccountUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => BankAccountCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => BankAccountCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => BankAccountCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => BankAccountWhereUniqueInputSchema), z.lazy(() => BankAccountWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => BankAccountWhereUniqueInputSchema), z.lazy(() => BankAccountWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => BankAccountWhereUniqueInputSchema), z.lazy(() => BankAccountWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => BankAccountWhereUniqueInputSchema), z.lazy(() => BankAccountWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => BankAccountUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => BankAccountUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => BankAccountScalarWhereInputSchema), z.lazy(() => BankAccountScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default BankAccountUncheckedUpdateManyWithoutProjectNestedInputSchema
