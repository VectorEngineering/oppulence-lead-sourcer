import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryScalarWhereInputSchema } from './TransactionCategoryScalarWhereInputSchema'
import { TransactionCategoryUpdateManyMutationInputSchema } from './TransactionCategoryUpdateManyMutationInputSchema'
import { TransactionCategoryUncheckedUpdateManyWithoutParentInputSchema } from './TransactionCategoryUncheckedUpdateManyWithoutParentInputSchema'

export const TransactionCategoryUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateManyWithWhereWithoutParentInput> =
    z
        .object({
            where: z.lazy(() => TransactionCategoryScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => TransactionCategoryUpdateManyMutationInputSchema),
                z.lazy(() => TransactionCategoryUncheckedUpdateManyWithoutParentInputSchema)
            ])
        })
        .strict()

export default TransactionCategoryUpdateManyWithWhereWithoutParentInputSchema
