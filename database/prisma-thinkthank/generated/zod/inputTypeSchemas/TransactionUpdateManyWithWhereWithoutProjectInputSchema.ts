import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema'
import { TransactionUpdateManyMutationInputSchema } from './TransactionUpdateManyMutationInputSchema'
import { TransactionUncheckedUpdateManyWithoutProjectInputSchema } from './TransactionUncheckedUpdateManyWithoutProjectInputSchema'

export const TransactionUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => TransactionScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => TransactionUpdateManyMutationInputSchema),
                z.lazy(() => TransactionUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateManyWithWhereWithoutProjectInputSchema
