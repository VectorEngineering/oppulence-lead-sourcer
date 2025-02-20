import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryCreateWithoutProjectInputSchema } from './TransactionCategoryCreateWithoutProjectInputSchema'
import { TransactionCategoryUncheckedCreateWithoutProjectInputSchema } from './TransactionCategoryUncheckedCreateWithoutProjectInputSchema'

export const TransactionCategoryCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCategoryCreateOrConnectWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => TransactionCategoryCreateWithoutProjectInputSchema),
                z.lazy(() => TransactionCategoryUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionCategoryCreateOrConnectWithoutProjectInputSchema
