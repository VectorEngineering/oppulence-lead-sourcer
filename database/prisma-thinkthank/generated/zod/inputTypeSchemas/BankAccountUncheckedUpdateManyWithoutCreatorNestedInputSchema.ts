import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateWithoutCreatorInputSchema } from './BankAccountCreateWithoutCreatorInputSchema'
import { BankAccountUncheckedCreateWithoutCreatorInputSchema } from './BankAccountUncheckedCreateWithoutCreatorInputSchema'
import { BankAccountCreateOrConnectWithoutCreatorInputSchema } from './BankAccountCreateOrConnectWithoutCreatorInputSchema'
import { BankAccountUpsertWithWhereUniqueWithoutCreatorInputSchema } from './BankAccountUpsertWithWhereUniqueWithoutCreatorInputSchema'
import { BankAccountCreateManyCreatorInputEnvelopeSchema } from './BankAccountCreateManyCreatorInputEnvelopeSchema'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateWithWhereUniqueWithoutCreatorInputSchema } from './BankAccountUpdateWithWhereUniqueWithoutCreatorInputSchema'
import { BankAccountUpdateManyWithWhereWithoutCreatorInputSchema } from './BankAccountUpdateManyWithWhereWithoutCreatorInputSchema'
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema'

export const BankAccountUncheckedUpdateManyWithoutCreatorNestedInputSchema: z.ZodType<Prisma.BankAccountUncheckedUpdateManyWithoutCreatorNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankAccountCreateWithoutCreatorInputSchema),
                    z.lazy(() => BankAccountCreateWithoutCreatorInputSchema).array(),
                    z.lazy(() => BankAccountUncheckedCreateWithoutCreatorInputSchema),
                    z.lazy(() => BankAccountUncheckedCreateWithoutCreatorInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => BankAccountCreateOrConnectWithoutCreatorInputSchema),
                    z.lazy(() => BankAccountCreateOrConnectWithoutCreatorInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutCreatorInputSchema),
                    z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutCreatorInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => BankAccountCreateManyCreatorInputEnvelopeSchema).optional(),
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
                    z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutCreatorInputSchema),
                    z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutCreatorInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => BankAccountUpdateManyWithWhereWithoutCreatorInputSchema),
                    z.lazy(() => BankAccountUpdateManyWithWhereWithoutCreatorInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => BankAccountScalarWhereInputSchema), z.lazy(() => BankAccountScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default BankAccountUncheckedUpdateManyWithoutCreatorNestedInputSchema
