import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionHistoryCreateWithoutTransactionInputSchema } from './TransactionHistoryCreateWithoutTransactionInputSchema'
import { TransactionHistoryUncheckedCreateWithoutTransactionInputSchema } from './TransactionHistoryUncheckedCreateWithoutTransactionInputSchema'
import { TransactionHistoryCreateOrConnectWithoutTransactionInputSchema } from './TransactionHistoryCreateOrConnectWithoutTransactionInputSchema'
import { TransactionHistoryCreateManyTransactionInputEnvelopeSchema } from './TransactionHistoryCreateManyTransactionInputEnvelopeSchema'
import { TransactionHistoryWhereUniqueInputSchema } from './TransactionHistoryWhereUniqueInputSchema'

export const TransactionHistoryUncheckedCreateNestedManyWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionHistoryUncheckedCreateNestedManyWithoutTransactionInput> =
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
            createMany: z.lazy(() => TransactionHistoryCreateManyTransactionInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionHistoryWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionHistoryUncheckedCreateNestedManyWithoutTransactionInputSchema
