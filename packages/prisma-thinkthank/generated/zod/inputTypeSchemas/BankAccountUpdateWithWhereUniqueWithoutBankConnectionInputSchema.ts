import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateWithoutBankConnectionInputSchema } from './BankAccountUpdateWithoutBankConnectionInputSchema'
import { BankAccountUncheckedUpdateWithoutBankConnectionInputSchema } from './BankAccountUncheckedUpdateWithoutBankConnectionInputSchema'

export const BankAccountUpdateWithWhereUniqueWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankAccountUpdateWithWhereUniqueWithoutBankConnectionInput> =
    z
        .object({
            where: z.lazy(() => BankAccountWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => BankAccountUpdateWithoutBankConnectionInputSchema),
                z.lazy(() => BankAccountUncheckedUpdateWithoutBankConnectionInputSchema)
            ])
        })
        .strict()

export default BankAccountUpdateWithWhereUniqueWithoutBankConnectionInputSchema
