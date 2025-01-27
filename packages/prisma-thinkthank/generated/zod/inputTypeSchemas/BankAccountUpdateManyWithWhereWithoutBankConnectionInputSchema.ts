import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema'
import { BankAccountUpdateManyMutationInputSchema } from './BankAccountUpdateManyMutationInputSchema'
import { BankAccountUncheckedUpdateManyWithoutBankConnectionInputSchema } from './BankAccountUncheckedUpdateManyWithoutBankConnectionInputSchema'

export const BankAccountUpdateManyWithWhereWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithWhereWithoutBankConnectionInput> =
    z
        .object({
            where: z.lazy(() => BankAccountScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => BankAccountUpdateManyMutationInputSchema),
                z.lazy(() => BankAccountUncheckedUpdateManyWithoutBankConnectionInputSchema)
            ])
        })
        .strict()

export default BankAccountUpdateManyWithWhereWithoutBankConnectionInputSchema
