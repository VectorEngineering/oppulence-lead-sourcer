import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateWithoutBankAccountInputSchema } from './TransactionUpdateWithoutBankAccountInputSchema'
import { TransactionUncheckedUpdateWithoutBankAccountInputSchema } from './TransactionUncheckedUpdateWithoutBankAccountInputSchema'

export const TransactionUpdateWithWhereUniqueWithoutBankAccountInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutBankAccountInput> =
    z
        .object({
            where: z.lazy(() => TransactionWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => TransactionUpdateWithoutBankAccountInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutBankAccountInputSchema)
            ])
        })
        .strict()

export default TransactionUpdateWithWhereUniqueWithoutBankAccountInputSchema
