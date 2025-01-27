import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateWithoutCreatorInputSchema } from './BankAccountUpdateWithoutCreatorInputSchema'
import { BankAccountUncheckedUpdateWithoutCreatorInputSchema } from './BankAccountUncheckedUpdateWithoutCreatorInputSchema'

export const BankAccountUpdateWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.BankAccountUpdateWithWhereUniqueWithoutCreatorInput> =
    z
        .object({
            where: z.lazy(() => BankAccountWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => BankAccountUpdateWithoutCreatorInputSchema),
                z.lazy(() => BankAccountUncheckedUpdateWithoutCreatorInputSchema)
            ])
        })
        .strict()

export default BankAccountUpdateWithWhereUniqueWithoutCreatorInputSchema
