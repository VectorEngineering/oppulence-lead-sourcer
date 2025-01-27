import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'
import { TransactionUpdateWithoutReconciliationMatchesInputSchema } from './TransactionUpdateWithoutReconciliationMatchesInputSchema'
import { TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema'

export const TransactionUpdateToOneWithWhereWithoutReconciliationMatchesInputSchema: z.ZodType<Prisma.TransactionUpdateToOneWithWhereWithoutReconciliationMatchesInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => TransactionUpdateWithoutReconciliationMatchesInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateToOneWithWhereWithoutReconciliationMatchesInputSchema
