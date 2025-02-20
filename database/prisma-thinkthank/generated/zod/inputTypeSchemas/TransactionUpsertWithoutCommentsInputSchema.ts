import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionUpdateWithoutCommentsInputSchema } from './TransactionUpdateWithoutCommentsInputSchema'
import { TransactionUncheckedUpdateWithoutCommentsInputSchema } from './TransactionUncheckedUpdateWithoutCommentsInputSchema'
import { TransactionCreateWithoutCommentsInputSchema } from './TransactionCreateWithoutCommentsInputSchema'
import { TransactionUncheckedCreateWithoutCommentsInputSchema } from './TransactionUncheckedCreateWithoutCommentsInputSchema'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'

export const TransactionUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.TransactionUpsertWithoutCommentsInput> = z
    .object({
        update: z.union([
            z.lazy(() => TransactionUpdateWithoutCommentsInputSchema),
            z.lazy(() => TransactionUncheckedUpdateWithoutCommentsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TransactionCreateWithoutCommentsInputSchema),
            z.lazy(() => TransactionUncheckedCreateWithoutCommentsInputSchema)
        ]),
        where: z.lazy(() => TransactionWhereInputSchema).optional()
    })
    .strict()

export default TransactionUpsertWithoutCommentsInputSchema
