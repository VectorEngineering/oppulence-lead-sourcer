import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionCreateWithoutBankAccountsInputSchema } from './BankConnectionCreateWithoutBankAccountsInputSchema'
import { BankConnectionUncheckedCreateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedCreateWithoutBankAccountsInputSchema'
import { BankConnectionCreateOrConnectWithoutBankAccountsInputSchema } from './BankConnectionCreateOrConnectWithoutBankAccountsInputSchema'
import { BankConnectionUpsertWithoutBankAccountsInputSchema } from './BankConnectionUpsertWithoutBankAccountsInputSchema'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionUpdateToOneWithWhereWithoutBankAccountsInputSchema } from './BankConnectionUpdateToOneWithWhereWithoutBankAccountsInputSchema'
import { BankConnectionUpdateWithoutBankAccountsInputSchema } from './BankConnectionUpdateWithoutBankAccountsInputSchema'
import { BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema } from './BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema'

export const BankConnectionUpdateOneRequiredWithoutBankAccountsNestedInputSchema: z.ZodType<Prisma.BankConnectionUpdateOneRequiredWithoutBankAccountsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankConnectionCreateWithoutBankAccountsInputSchema),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutBankAccountsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => BankConnectionCreateOrConnectWithoutBankAccountsInputSchema).optional(),
            upsert: z.lazy(() => BankConnectionUpsertWithoutBankAccountsInputSchema).optional(),
            connect: z.lazy(() => BankConnectionWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => BankConnectionUpdateToOneWithWhereWithoutBankAccountsInputSchema),
                    z.lazy(() => BankConnectionUpdateWithoutBankAccountsInputSchema),
                    z.lazy(() => BankConnectionUncheckedUpdateWithoutBankAccountsInputSchema)
                ])
                .optional()
        })
        .strict()

export default BankConnectionUpdateOneRequiredWithoutBankAccountsNestedInputSchema
