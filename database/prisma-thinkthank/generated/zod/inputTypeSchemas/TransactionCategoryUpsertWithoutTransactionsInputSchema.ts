import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryUpdateWithoutTransactionsInputSchema } from './TransactionCategoryUpdateWithoutTransactionsInputSchema'
import { TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema'
import { TransactionCategoryCreateWithoutTransactionsInputSchema } from './TransactionCategoryCreateWithoutTransactionsInputSchema'
import { TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema'
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema'

export const TransactionCategoryUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.TransactionCategoryUpsertWithoutTransactionsInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => TransactionCategoryUpdateWithoutTransactionsInputSchema),
                z.lazy(() => TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema)
            ]),
            create: z.union([
                z.lazy(() => TransactionCategoryCreateWithoutTransactionsInputSchema),
                z.lazy(() => TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema)
            ]),
            where: z.lazy(() => TransactionCategoryWhereInputSchema).optional()
        })
        .strict()

export default TransactionCategoryUpsertWithoutTransactionsInputSchema
