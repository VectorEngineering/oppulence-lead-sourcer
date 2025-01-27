import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionReconciliationMatchWhereUniqueInputSchema } from './TransactionReconciliationMatchWhereUniqueInputSchema'
import { TransactionReconciliationMatchUpdateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUpdateWithoutTransactionInputSchema'
import { TransactionReconciliationMatchUncheckedUpdateWithoutTransactionInputSchema } from './TransactionReconciliationMatchUncheckedUpdateWithoutTransactionInputSchema'

export const TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInput> =
    z
        .object({
            where: z.lazy(() => TransactionReconciliationMatchWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionReconciliationMatchUpdateWithoutTransactionInputSchema),
                z.lazy(() => TransactionReconciliationMatchUncheckedUpdateWithoutTransactionInputSchema)
            ])
        })
        .strict()

export default TransactionReconciliationMatchUpdateWithWhereUniqueWithoutTransactionInputSchema
