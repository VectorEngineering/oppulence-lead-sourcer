import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutAttachmentsInputSchema } from './TransactionCreateWithoutAttachmentsInputSchema'
import { TransactionUncheckedCreateWithoutAttachmentsInputSchema } from './TransactionUncheckedCreateWithoutAttachmentsInputSchema'
import { TransactionCreateOrConnectWithoutAttachmentsInputSchema } from './TransactionCreateOrConnectWithoutAttachmentsInputSchema'
import { TransactionUpsertWithoutAttachmentsInputSchema } from './TransactionUpsertWithoutAttachmentsInputSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateToOneWithWhereWithoutAttachmentsInputSchema } from './TransactionUpdateToOneWithWhereWithoutAttachmentsInputSchema'
import { TransactionUpdateWithoutAttachmentsInputSchema } from './TransactionUpdateWithoutAttachmentsInputSchema'
import { TransactionUncheckedUpdateWithoutAttachmentsInputSchema } from './TransactionUncheckedUpdateWithoutAttachmentsInputSchema'

export const TransactionUpdateOneRequiredWithoutAttachmentsNestedInputSchema: z.ZodType<Prisma.TransactionUpdateOneRequiredWithoutAttachmentsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCreateWithoutAttachmentsInputSchema),
                    z.lazy(() => TransactionUncheckedCreateWithoutAttachmentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutAttachmentsInputSchema).optional(),
            upsert: z.lazy(() => TransactionUpsertWithoutAttachmentsInputSchema).optional(),
            connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => TransactionUpdateToOneWithWhereWithoutAttachmentsInputSchema),
                    z.lazy(() => TransactionUpdateWithoutAttachmentsInputSchema),
                    z.lazy(() => TransactionUncheckedUpdateWithoutAttachmentsInputSchema)
                ])
                .optional()
        })
        .strict()

export default TransactionUpdateOneRequiredWithoutAttachmentsNestedInputSchema
