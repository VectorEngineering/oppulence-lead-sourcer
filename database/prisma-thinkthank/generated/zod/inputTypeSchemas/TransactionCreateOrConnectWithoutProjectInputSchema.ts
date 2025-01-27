import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionCreateWithoutProjectInputSchema } from './TransactionCreateWithoutProjectInputSchema'
import { TransactionUncheckedCreateWithoutProjectInputSchema } from './TransactionUncheckedCreateWithoutProjectInputSchema'

export const TransactionCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => TransactionWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => TransactionCreateWithoutProjectInputSchema),
            z.lazy(() => TransactionUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default TransactionCreateOrConnectWithoutProjectInputSchema
