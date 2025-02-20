import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutHistoryInputSchema } from './TransactionCreateWithoutHistoryInputSchema'
import { TransactionUncheckedCreateWithoutHistoryInputSchema } from './TransactionUncheckedCreateWithoutHistoryInputSchema'
import { TransactionCreateOrConnectWithoutHistoryInputSchema } from './TransactionCreateOrConnectWithoutHistoryInputSchema'
import { TransactionUpsertWithoutHistoryInputSchema } from './TransactionUpsertWithoutHistoryInputSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateToOneWithWhereWithoutHistoryInputSchema } from './TransactionUpdateToOneWithWhereWithoutHistoryInputSchema'
import { TransactionUpdateWithoutHistoryInputSchema } from './TransactionUpdateWithoutHistoryInputSchema'
import { TransactionUncheckedUpdateWithoutHistoryInputSchema } from './TransactionUncheckedUpdateWithoutHistoryInputSchema'

export const TransactionUpdateOneRequiredWithoutHistoryNestedInputSchema: z.ZodType<Prisma.TransactionUpdateOneRequiredWithoutHistoryNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCreateWithoutHistoryInputSchema),
                    z.lazy(() => TransactionUncheckedCreateWithoutHistoryInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutHistoryInputSchema).optional(),
            upsert: z.lazy(() => TransactionUpsertWithoutHistoryInputSchema).optional(),
            connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => TransactionUpdateToOneWithWhereWithoutHistoryInputSchema),
                    z.lazy(() => TransactionUpdateWithoutHistoryInputSchema),
                    z.lazy(() => TransactionUncheckedUpdateWithoutHistoryInputSchema)
                ])
                .optional()
        })
        .strict()

export default TransactionUpdateOneRequiredWithoutHistoryNestedInputSchema
