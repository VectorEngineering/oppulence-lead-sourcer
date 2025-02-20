import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateWithoutBankConnectionInputSchema } from './BankAccountCreateWithoutBankConnectionInputSchema'
import { BankAccountUncheckedCreateWithoutBankConnectionInputSchema } from './BankAccountUncheckedCreateWithoutBankConnectionInputSchema'
import { BankAccountCreateOrConnectWithoutBankConnectionInputSchema } from './BankAccountCreateOrConnectWithoutBankConnectionInputSchema'
import { BankAccountUpsertWithWhereUniqueWithoutBankConnectionInputSchema } from './BankAccountUpsertWithWhereUniqueWithoutBankConnectionInputSchema'
import { BankAccountCreateManyBankConnectionInputEnvelopeSchema } from './BankAccountCreateManyBankConnectionInputEnvelopeSchema'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateWithWhereUniqueWithoutBankConnectionInputSchema } from './BankAccountUpdateWithWhereUniqueWithoutBankConnectionInputSchema'
import { BankAccountUpdateManyWithWhereWithoutBankConnectionInputSchema } from './BankAccountUpdateManyWithWhereWithoutBankConnectionInputSchema'
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema'

export const BankAccountUpdateManyWithoutBankConnectionNestedInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithoutBankConnectionNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankAccountCreateWithoutBankConnectionInputSchema),
                    z.lazy(() => BankAccountCreateWithoutBankConnectionInputSchema).array(),
                    z.lazy(() => BankAccountUncheckedCreateWithoutBankConnectionInputSchema),
                    z.lazy(() => BankAccountUncheckedCreateWithoutBankConnectionInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => BankAccountCreateOrConnectWithoutBankConnectionInputSchema),
                    z.lazy(() => BankAccountCreateOrConnectWithoutBankConnectionInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutBankConnectionInputSchema),
                    z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutBankConnectionInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => BankAccountCreateManyBankConnectionInputEnvelopeSchema).optional(),
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
                    z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutBankConnectionInputSchema),
                    z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutBankConnectionInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => BankAccountUpdateManyWithWhereWithoutBankConnectionInputSchema),
                    z.lazy(() => BankAccountUpdateManyWithWhereWithoutBankConnectionInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => BankAccountScalarWhereInputSchema), z.lazy(() => BankAccountScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default BankAccountUpdateManyWithoutBankConnectionNestedInputSchema
