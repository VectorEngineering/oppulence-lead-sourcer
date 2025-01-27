import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateWithoutProjectInputSchema } from './TransactionCategoryUpdateWithoutProjectInputSchema'
import { TransactionCategoryUncheckedUpdateWithoutProjectInputSchema } from './TransactionCategoryUncheckedUpdateWithoutProjectInputSchema'
import { TransactionCategoryCreateWithoutProjectInputSchema } from './TransactionCategoryCreateWithoutProjectInputSchema'
import { TransactionCategoryUncheckedCreateWithoutProjectInputSchema } from './TransactionCategoryUncheckedCreateWithoutProjectInputSchema'

export const TransactionCategoryUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCategoryUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => TransactionCategoryUpdateWithoutProjectInputSchema),
                z.lazy(() => TransactionCategoryUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => TransactionCategoryCreateWithoutProjectInputSchema),
                z.lazy(() => TransactionCategoryUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionCategoryUpsertWithWhereUniqueWithoutProjectInputSchema
