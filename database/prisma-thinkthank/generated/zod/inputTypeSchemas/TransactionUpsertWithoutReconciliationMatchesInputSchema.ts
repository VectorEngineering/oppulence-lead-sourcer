import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionUpdateWithoutReconciliationMatchesInputSchema } from './TransactionUpdateWithoutReconciliationMatchesInputSchema'
import { TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema'
import { TransactionCreateWithoutReconciliationMatchesInputSchema } from './TransactionCreateWithoutReconciliationMatchesInputSchema'
import { TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'

export const TransactionUpsertWithoutReconciliationMatchesInputSchema: z.ZodType<Prisma.TransactionUpsertWithoutReconciliationMatchesInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => TransactionUpdateWithoutReconciliationMatchesInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutReconciliationMatchesInputSchema)
            ]),
            create: z.union([
                z.lazy(() => TransactionCreateWithoutReconciliationMatchesInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema)
            ]),
            where: z.lazy(() => TransactionWhereInputSchema).optional()
        })
        .strict()

export default TransactionUpsertWithoutReconciliationMatchesInputSchema
