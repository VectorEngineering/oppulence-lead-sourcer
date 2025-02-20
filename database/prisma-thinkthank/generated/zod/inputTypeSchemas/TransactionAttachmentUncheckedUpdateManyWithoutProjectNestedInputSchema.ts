import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentCreateWithoutProjectInputSchema } from './TransactionAttachmentCreateWithoutProjectInputSchema'
import { TransactionAttachmentUncheckedCreateWithoutProjectInputSchema } from './TransactionAttachmentUncheckedCreateWithoutProjectInputSchema'
import { TransactionAttachmentCreateOrConnectWithoutProjectInputSchema } from './TransactionAttachmentCreateOrConnectWithoutProjectInputSchema'
import { TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInputSchema } from './TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInputSchema'
import { TransactionAttachmentCreateManyProjectInputEnvelopeSchema } from './TransactionAttachmentCreateManyProjectInputEnvelopeSchema'
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema'
import { TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInputSchema } from './TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInputSchema'
import { TransactionAttachmentUpdateManyWithWhereWithoutProjectInputSchema } from './TransactionAttachmentUpdateManyWithWhereWithoutProjectInputSchema'
import { TransactionAttachmentScalarWhereInputSchema } from './TransactionAttachmentScalarWhereInputSchema'

export const TransactionAttachmentUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TransactionAttachmentUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionAttachmentCreateWithoutProjectInputSchema),
                    z.lazy(() => TransactionAttachmentCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => TransactionAttachmentUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => TransactionAttachmentUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionAttachmentCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => TransactionAttachmentCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => TransactionAttachmentUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionAttachmentCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema),
                    z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => TransactionAttachmentUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionAttachmentUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => TransactionAttachmentUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => TransactionAttachmentScalarWhereInputSchema),
                    z.lazy(() => TransactionAttachmentScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionAttachmentUncheckedUpdateManyWithoutProjectNestedInputSchema
