import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateWithoutBankConnectionInputSchema } from './BankAccountUpdateWithoutBankConnectionInputSchema'
import { BankAccountUncheckedUpdateWithoutBankConnectionInputSchema } from './BankAccountUncheckedUpdateWithoutBankConnectionInputSchema'
import { BankAccountCreateWithoutBankConnectionInputSchema } from './BankAccountCreateWithoutBankConnectionInputSchema'
import { BankAccountUncheckedCreateWithoutBankConnectionInputSchema } from './BankAccountUncheckedCreateWithoutBankConnectionInputSchema'

export const BankAccountUpsertWithWhereUniqueWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankAccountUpsertWithWhereUniqueWithoutBankConnectionInput> =
    z
        .object({
            where: z.lazy(() => BankAccountWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => BankAccountUpdateWithoutBankConnectionInputSchema),
                z.lazy(() => BankAccountUncheckedUpdateWithoutBankConnectionInputSchema)
            ]),
            create: z.union([
                z.lazy(() => BankAccountCreateWithoutBankConnectionInputSchema),
                z.lazy(() => BankAccountUncheckedCreateWithoutBankConnectionInputSchema)
            ])
        })
        .strict()

export default BankAccountUpsertWithWhereUniqueWithoutBankConnectionInputSchema
