import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutReconciliationMatchesInputSchema } from './TransactionCreateWithoutReconciliationMatchesInputSchema'
import { TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema } from './TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema'
import { TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema } from './TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'

export const TransactionCreateNestedOneWithoutReconciliationMatchesInputSchema: z.ZodType<Prisma.TransactionCreateNestedOneWithoutReconciliationMatchesInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCreateWithoutReconciliationMatchesInputSchema),
                    z.lazy(() => TransactionUncheckedCreateWithoutReconciliationMatchesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutReconciliationMatchesInputSchema).optional(),
            connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional()
        })
        .strict()

export default TransactionCreateNestedOneWithoutReconciliationMatchesInputSchema
