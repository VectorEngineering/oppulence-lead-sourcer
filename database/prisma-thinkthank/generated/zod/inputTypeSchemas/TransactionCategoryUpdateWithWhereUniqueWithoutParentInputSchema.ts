import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateWithoutParentInputSchema } from './TransactionCategoryUpdateWithoutParentInputSchema'
import { TransactionCategoryUncheckedUpdateWithoutParentInputSchema } from './TransactionCategoryUncheckedUpdateWithoutParentInputSchema'

export const TransactionCategoryUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateWithWhereUniqueWithoutParentInput> =
    z
        .object({
            where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionCategoryUpdateWithoutParentInputSchema),
                z.lazy(() => TransactionCategoryUncheckedUpdateWithoutParentInputSchema)
            ])
        })
        .strict()

export default TransactionCategoryUpdateWithWhereUniqueWithoutParentInputSchema
