import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountCreateWithoutProjectInputSchema } from './BankAccountCreateWithoutProjectInputSchema'
import { BankAccountUncheckedCreateWithoutProjectInputSchema } from './BankAccountUncheckedCreateWithoutProjectInputSchema'

export const BankAccountCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.BankAccountCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => BankAccountWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => BankAccountCreateWithoutProjectInputSchema),
            z.lazy(() => BankAccountUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default BankAccountCreateOrConnectWithoutProjectInputSchema
