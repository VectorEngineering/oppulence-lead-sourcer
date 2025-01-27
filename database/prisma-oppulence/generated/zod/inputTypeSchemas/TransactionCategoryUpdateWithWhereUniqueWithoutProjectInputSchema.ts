import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateWithoutProjectInputSchema } from './TransactionCategoryUpdateWithoutProjectInputSchema'
import { TransactionCategoryUncheckedUpdateWithoutProjectInputSchema } from './TransactionCategoryUncheckedUpdateWithoutProjectInputSchema'

export const TransactionCategoryUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionCategoryUpdateWithoutProjectInputSchema),
                z.lazy(() => TransactionCategoryUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionCategoryUpdateWithWhereUniqueWithoutProjectInputSchema
