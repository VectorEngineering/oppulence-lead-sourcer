import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionUpdateWithoutHistoryInputSchema } from './TransactionUpdateWithoutHistoryInputSchema'
import { TransactionUncheckedUpdateWithoutHistoryInputSchema } from './TransactionUncheckedUpdateWithoutHistoryInputSchema'
import { TransactionCreateWithoutHistoryInputSchema } from './TransactionCreateWithoutHistoryInputSchema'
import { TransactionUncheckedCreateWithoutHistoryInputSchema } from './TransactionUncheckedCreateWithoutHistoryInputSchema'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'

export const TransactionUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.TransactionUpsertWithoutHistoryInput> = z
    .object({
        update: z.union([
            z.lazy(() => TransactionUpdateWithoutHistoryInputSchema),
            z.lazy(() => TransactionUncheckedUpdateWithoutHistoryInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TransactionCreateWithoutHistoryInputSchema),
            z.lazy(() => TransactionUncheckedCreateWithoutHistoryInputSchema)
        ]),
        where: z.lazy(() => TransactionWhereInputSchema).optional()
    })
    .strict()

export default TransactionUpsertWithoutHistoryInputSchema
