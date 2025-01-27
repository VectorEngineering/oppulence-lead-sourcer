import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionHistoryCreateWithoutTransactionInputSchema } from './TransactionHistoryCreateWithoutTransactionInputSchema'
import { TransactionHistoryUncheckedCreateWithoutTransactionInputSchema } from './TransactionHistoryUncheckedCreateWithoutTransactionInputSchema'
import { TransactionHistoryCreateOrConnectWithoutTransactionInputSchema } from './TransactionHistoryCreateOrConnectWithoutTransactionInputSchema'
import { TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInputSchema } from './TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInputSchema'
import { TransactionHistoryCreateManyTransactionInputEnvelopeSchema } from './TransactionHistoryCreateManyTransactionInputEnvelopeSchema'
import { TransactionHistoryWhereUniqueInputSchema } from './TransactionHistoryWhereUniqueInputSchema'
import { TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInputSchema } from './TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInputSchema'
import { TransactionHistoryUpdateManyWithWhereWithoutTransactionInputSchema } from './TransactionHistoryUpdateManyWithWhereWithoutTransactionInputSchema'
import { TransactionHistoryScalarWhereInputSchema } from './TransactionHistoryScalarWhereInputSchema'

export const TransactionHistoryUpdateManyWithoutTransactionNestedInputSchema: z.ZodType<Prisma.TransactionHistoryUpdateManyWithoutTransactionNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionHistoryCreateWithoutTransactionInputSchema),
                    z.lazy(() => TransactionHistoryCreateWithoutTransactionInputSchema).array(),
                    z.lazy(() => TransactionHistoryUncheckedCreateWithoutTransactionInputSchema),
                    z.lazy(() => TransactionHistoryUncheckedCreateWithoutTransactionInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionHistoryCreateOrConnectWithoutTransactionInputSchema),
                    z.lazy(() => TransactionHistoryCreateOrConnectWithoutTransactionInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInputSchema),
                    z.lazy(() => TransactionHistoryUpsertWithWhereUniqueWithoutTransactionInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionHistoryCreateManyTransactionInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInputSchema),
                    z.lazy(() => TransactionHistoryUpdateWithWhereUniqueWithoutTransactionInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionHistoryUpdateManyWithWhereWithoutTransactionInputSchema),
                    z.lazy(() => TransactionHistoryUpdateManyWithWhereWithoutTransactionInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => TransactionHistoryScalarWhereInputSchema),
                    z.lazy(() => TransactionHistoryScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionHistoryUpdateManyWithoutTransactionNestedInputSchema
