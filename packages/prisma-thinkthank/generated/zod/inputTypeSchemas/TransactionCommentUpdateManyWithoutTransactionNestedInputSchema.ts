import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCommentCreateWithoutTransactionInputSchema } from './TransactionCommentCreateWithoutTransactionInputSchema'
import { TransactionCommentUncheckedCreateWithoutTransactionInputSchema } from './TransactionCommentUncheckedCreateWithoutTransactionInputSchema'
import { TransactionCommentCreateOrConnectWithoutTransactionInputSchema } from './TransactionCommentCreateOrConnectWithoutTransactionInputSchema'
import { TransactionCommentUpsertWithWhereUniqueWithoutTransactionInputSchema } from './TransactionCommentUpsertWithWhereUniqueWithoutTransactionInputSchema'
import { TransactionCommentCreateManyTransactionInputEnvelopeSchema } from './TransactionCommentCreateManyTransactionInputEnvelopeSchema'
import { TransactionCommentWhereUniqueInputSchema } from './TransactionCommentWhereUniqueInputSchema'
import { TransactionCommentUpdateWithWhereUniqueWithoutTransactionInputSchema } from './TransactionCommentUpdateWithWhereUniqueWithoutTransactionInputSchema'
import { TransactionCommentUpdateManyWithWhereWithoutTransactionInputSchema } from './TransactionCommentUpdateManyWithWhereWithoutTransactionInputSchema'
import { TransactionCommentScalarWhereInputSchema } from './TransactionCommentScalarWhereInputSchema'

export const TransactionCommentUpdateManyWithoutTransactionNestedInputSchema: z.ZodType<Prisma.TransactionCommentUpdateManyWithoutTransactionNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCommentCreateWithoutTransactionInputSchema),
                    z.lazy(() => TransactionCommentCreateWithoutTransactionInputSchema).array(),
                    z.lazy(() => TransactionCommentUncheckedCreateWithoutTransactionInputSchema),
                    z.lazy(() => TransactionCommentUncheckedCreateWithoutTransactionInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionCommentCreateOrConnectWithoutTransactionInputSchema),
                    z.lazy(() => TransactionCommentCreateOrConnectWithoutTransactionInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionCommentUpsertWithWhereUniqueWithoutTransactionInputSchema),
                    z.lazy(() => TransactionCommentUpsertWithWhereUniqueWithoutTransactionInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionCommentCreateManyTransactionInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema),
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema),
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema),
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema),
                    z.lazy(() => TransactionCommentWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => TransactionCommentUpdateWithWhereUniqueWithoutTransactionInputSchema),
                    z.lazy(() => TransactionCommentUpdateWithWhereUniqueWithoutTransactionInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionCommentUpdateManyWithWhereWithoutTransactionInputSchema),
                    z.lazy(() => TransactionCommentUpdateManyWithWhereWithoutTransactionInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => TransactionCommentScalarWhereInputSchema),
                    z.lazy(() => TransactionCommentScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionCommentUpdateManyWithoutTransactionNestedInputSchema
