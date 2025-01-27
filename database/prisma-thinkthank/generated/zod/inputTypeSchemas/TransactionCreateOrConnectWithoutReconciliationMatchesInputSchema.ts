import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionCreateWithoutReconciliationMatchesInputSchema } from './TransactionCreateWithoutReconciliationMatchesInputSchema'
import { TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema'

export const TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutReconciliationMatchesInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => TransactionCreateWithoutReconciliationMatchesInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema)
            ])
        })
        .strict()

export default TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema
