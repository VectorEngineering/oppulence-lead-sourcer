import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionScalarWhereInputSchema } from './TransactionScalarWhereInputSchema'
import { TransactionUpdateManyMutationInputSchema } from './TransactionUpdateManyMutationInputSchema'
import { TransactionUncheckedUpdateManyWithoutBankAccountInputSchema } from './TransactionUncheckedUpdateManyWithoutBankAccountInputSchema'

export const TransactionUpdateManyWithWhereWithoutBankAccountInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutBankAccountInput> =
    z
        .object({
            where: z.lazy(() => TransactionScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => TransactionUpdateManyMutationInputSchema),
                z.lazy(() => TransactionUncheckedUpdateManyWithoutBankAccountInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateManyWithWhereWithoutBankAccountInputSchema
