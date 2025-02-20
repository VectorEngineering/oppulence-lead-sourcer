import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateWithoutChildrenInputSchema } from './TransactionCategoryCreateWithoutChildrenInputSchema'
import { TransactionCategoryUncheckedCreateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedCreateWithoutChildrenInputSchema'
import { TransactionCategoryCreateOrConnectWithoutChildrenInputSchema } from './TransactionCategoryCreateOrConnectWithoutChildrenInputSchema'
import { TransactionCategoryUpsertWithoutChildrenInputSchema } from './TransactionCategoryUpsertWithoutChildrenInputSchema'
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateToOneWithWhereWithoutChildrenInputSchema } from './TransactionCategoryUpdateToOneWithWhereWithoutChildrenInputSchema'
import { TransactionCategoryUpdateWithoutChildrenInputSchema } from './TransactionCategoryUpdateWithoutChildrenInputSchema'
import { TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema } from './TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema'

export const TransactionCategoryUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateOneWithoutChildrenNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCategoryCreateWithoutChildrenInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutChildrenInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionCategoryCreateOrConnectWithoutChildrenInputSchema).optional(),
            upsert: z.lazy(() => TransactionCategoryUpsertWithoutChildrenInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => TransactionCategoryWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => TransactionCategoryWhereInputSchema)]).optional(),
            connect: z.lazy(() => TransactionCategoryWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => TransactionCategoryUpdateToOneWithWhereWithoutChildrenInputSchema),
                    z.lazy(() => TransactionCategoryUpdateWithoutChildrenInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedUpdateWithoutChildrenInputSchema)
                ])
                .optional()
        })
        .strict()

export default TransactionCategoryUpdateOneWithoutChildrenNestedInputSchema
