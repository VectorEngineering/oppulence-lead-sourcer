import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutBankAccountInputSchema } from './TransactionCreateWithoutBankAccountInputSchema'
import { TransactionUncheckedCreateWithoutBankAccountInputSchema } from './TransactionUncheckedCreateWithoutBankAccountInputSchema'
import { TransactionCreateOrConnectWithoutBankAccountInputSchema } from './TransactionCreateOrConnectWithoutBankAccountInputSchema'
import { TransactionUpsertWithWhereUniqueWithoutBankAccountInputSchema } from './TransactionUpsertWithWhereUniqueWithoutBankAccountInputSchema'
import { TransactionCreateManyBankAccountInputEnvelopeSchema } from './TransactionCreateManyBankAccountInputEnvelopeSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateWithWhereUniqueWithoutBankAccountInputSchema } from './TransactionUpdateWithWhereUniqueWithoutBankAccountInputSchema'
import { TransactionUpdateManyWithWhereWithoutBankAccountInputSchema } from './TransactionUpdateManyWithWhereWithoutBankAccountInputSchema'
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema'

export const TransactionUpdateManyWithoutBankAccountNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutBankAccountNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCreateWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionCreateWithoutBankAccountInputSchema).array(),
                    z.lazy(() => TransactionUncheckedCreateWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionUncheckedCreateWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionCreateOrConnectWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionCreateOrConnectWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionUpsertWithWhereUniqueWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionUpsertWithWhereUniqueWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionCreateManyBankAccountInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => TransactionUpdateWithWhereUniqueWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionUpdateWithWhereUniqueWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionUpdateManyWithWhereWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionUpdateManyWithWhereWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => TransactionScalarWhereInputSchema), z.lazy(() => TransactionScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default TransactionUpdateManyWithoutBankAccountNestedInputSchema
