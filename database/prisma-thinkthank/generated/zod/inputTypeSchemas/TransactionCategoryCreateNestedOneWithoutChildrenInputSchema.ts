import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateWithoutChildrenInputSchema } from './TransactionCategoryCreateWithoutChildrenInputSchema'
import { TransactionCategoryUncheckedCreateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedCreateWithoutChildrenInputSchema'
import { TransactionCategoryCreateOrConnectWithoutChildrenInputSchema } from './TransactionCategoryCreateOrConnectWithoutChildrenInputSchema'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'

export const TransactionCategoryCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.TransactionCategoryCreateNestedOneWithoutChildrenInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCategoryCreateWithoutChildrenInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutChildrenInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionCategoryCreateOrConnectWithoutChildrenInputSchema).optional(),
            connect: z.lazy(() => TransactionCategoryWhereUniqueInputSchema).optional()
        })
        .strict()

export default TransactionCategoryCreateNestedOneWithoutChildrenInputSchema
