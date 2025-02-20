import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionCreateWithoutBankAccountsInputSchema } from './BankConnectionCreateWithoutBankAccountsInputSchema'
import { BankConnectionUncheckedCreateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedCreateWithoutBankAccountsInputSchema'

export const BankConnectionCreateOrConnectWithoutBankAccountsInputSchema: z.ZodType<Prisma.BankConnectionCreateOrConnectWithoutBankAccountsInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => BankConnectionCreateWithoutBankAccountsInputSchema),
                z.lazy(() => BankConnectionUncheckedCreateWithoutBankAccountsInputSchema)
            ])
        })
        .strict()

export default BankConnectionCreateOrConnectWithoutBankAccountsInputSchema
