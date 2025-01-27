import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateWithoutProjectInputSchema } from './TransactionUpdateWithoutProjectInputSchema'
import { TransactionUncheckedUpdateWithoutProjectInputSchema } from './TransactionUncheckedUpdateWithoutProjectInputSchema'
import { TransactionCreateWithoutProjectInputSchema } from './TransactionCreateWithoutProjectInputSchema'
import { TransactionUncheckedCreateWithoutProjectInputSchema } from './TransactionUncheckedCreateWithoutProjectInputSchema'

export const TransactionUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => TransactionUpdateWithoutProjectInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => TransactionCreateWithoutProjectInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionUpsertWithWhereUniqueWithoutProjectInputSchema
