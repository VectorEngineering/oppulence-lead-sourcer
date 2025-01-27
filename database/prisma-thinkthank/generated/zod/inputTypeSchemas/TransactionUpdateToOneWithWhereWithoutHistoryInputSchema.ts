import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'
import { TransactionUpdateWithoutHistoryInputSchema } from './TransactionUpdateWithoutHistoryInputSchema'
import { TransactionUncheckedUpdateWithoutHistoryInputSchema } from './TransactionUncheckedUpdateWithoutHistoryInputSchema'

export const TransactionUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.TransactionUpdateToOneWithWhereWithoutHistoryInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => TransactionUpdateWithoutHistoryInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutHistoryInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateToOneWithWhereWithoutHistoryInputSchema
