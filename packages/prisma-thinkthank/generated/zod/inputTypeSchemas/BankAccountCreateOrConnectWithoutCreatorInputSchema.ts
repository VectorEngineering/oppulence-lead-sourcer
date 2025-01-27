import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountCreateWithoutCreatorInputSchema } from './BankAccountCreateWithoutCreatorInputSchema'
import { BankAccountUncheckedCreateWithoutCreatorInputSchema } from './BankAccountUncheckedCreateWithoutCreatorInputSchema'

export const BankAccountCreateOrConnectWithoutCreatorInputSchema: z.ZodType<Prisma.BankAccountCreateOrConnectWithoutCreatorInput> = z
    .object({
        where: z.lazy(() => BankAccountWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => BankAccountCreateWithoutCreatorInputSchema),
            z.lazy(() => BankAccountUncheckedCreateWithoutCreatorInputSchema)
        ])
    })
    .strict()

export default BankAccountCreateOrConnectWithoutCreatorInputSchema
