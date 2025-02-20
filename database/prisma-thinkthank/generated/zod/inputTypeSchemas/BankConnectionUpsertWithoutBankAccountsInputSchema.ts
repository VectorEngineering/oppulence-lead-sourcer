import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionUpdateWithoutBankAccountsInputSchema } from './BankConnectionUpdateWithoutBankAccountsInputSchema'
import { BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema'
import { BankConnectionCreateWithoutBankAccountsInputSchema } from './BankConnectionCreateWithoutBankAccountsInputSchema'
import { BankConnectionUncheckedCreateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedCreateWithoutBankAccountsInputSchema'
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema'

export const BankConnectionUpsertWithoutBankAccountsInputSchema: z.ZodType<Prisma.BankConnectionUpsertWithoutBankAccountsInput> = z
    .object({
        update: z.union([
            z.lazy(() => BankConnectionUpdateWithoutBankAccountsInputSchema),
            z.lazy(() => BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => BankConnectionCreateWithoutBankAccountsInputSchema),
            z.lazy(() => BankConnectionUncheckedCreateWithoutBankAccountsInputSchema)
        ]),
        where: z.lazy(() => BankConnectionWhereInputSchema).optional()
    })
    .strict()

export default BankConnectionUpsertWithoutBankAccountsInputSchema
