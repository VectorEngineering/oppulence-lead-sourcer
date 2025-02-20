import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateWithoutProjectInputSchema } from './TransactionUpdateWithoutProjectInputSchema'
import { TransactionUncheckedUpdateWithoutProjectInputSchema } from './TransactionUncheckedUpdateWithoutProjectInputSchema'

export const TransactionUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionUpdateWithoutProjectInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateWithWhereUniqueWithoutProjectInputSchema
