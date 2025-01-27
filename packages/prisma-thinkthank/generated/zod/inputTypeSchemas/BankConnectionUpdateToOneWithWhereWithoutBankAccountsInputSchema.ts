import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema'
import { BankConnectionUpdateWithoutBankAccountsInputSchema } from './BankConnectionUpdateWithoutBankAccountsInputSchema'
import { BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema'

export const BankConnectionUpdateToOneWithWhereWithoutBankAccountsInputSchema: z.ZodType<Prisma.BankConnectionUpdateToOneWithWhereWithoutBankAccountsInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => BankConnectionUpdateWithoutBankAccountsInputSchema),
                z.lazy(() => BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema)
            ])
        })
        .strict()

export default BankConnectionUpdateToOneWithWhereWithoutBankAccountsInputSchema
