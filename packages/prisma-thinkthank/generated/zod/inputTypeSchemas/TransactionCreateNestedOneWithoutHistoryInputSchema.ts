import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutHistoryInputSchema } from './TransactionCreateWithoutHistoryInputSchema'
import { TransactionUncheckedCreateWithoutHistoryInputSchema } from './TransactionUncheckedCreateWithoutHistoryInputSchema'
import { TransactionCreateOrConnectWithoutHistoryInputSchema } from './TransactionCreateOrConnectWithoutHistoryInputSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'

export const TransactionCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.TransactionCreateNestedOneWithoutHistoryInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => TransactionCreateWithoutHistoryInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutHistoryInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutHistoryInputSchema).optional(),
        connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional()
    })
    .strict()

export default TransactionCreateNestedOneWithoutHistoryInputSchema
