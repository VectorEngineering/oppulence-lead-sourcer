import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateWithoutTransactionsInputSchema } from './TransactionCategoryCreateWithoutTransactionsInputSchema'
import { TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema'
import { TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema } from './TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema'
import { TransactionCategoryUpsertWithoutTransactionsInputSchema } from './TransactionCategoryUpsertWithoutTransactionsInputSchema'
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateToOneWithWhereWithoutTransactionsInputSchema } from './TransactionCategoryUpdateToOneWithWhereWithoutTransactionsInputSchema'
import { TransactionCategoryUpdateWithoutTransactionsInputSchema } from './TransactionCategoryUpdateWithoutTransactionsInputSchema'
import { TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema } from './TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema'

export const TransactionCategoryUpdateOneWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateOneWithoutTransactionsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCategoryCreateWithoutTransactionsInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutTransactionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionCategoryCreateOrConnectWithoutTransactionsInputSchema).optional(),
            upsert: z.lazy(() => TransactionCategoryUpsertWithoutTransactionsInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => TransactionCategoryWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => TransactionCategoryWhereInputSchema)]).optional(),
            connect: z.lazy(() => TransactionCategoryWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => TransactionCategoryUpdateToOneWithWhereWithoutTransactionsInputSchema),
                    z.lazy(() => TransactionCategoryUpdateWithoutTransactionsInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedUpdateWithoutTransactionsInputSchema)
                ])
                .optional()
        })
        .strict()

export default TransactionCategoryUpdateOneWithoutTransactionsNestedInputSchema
