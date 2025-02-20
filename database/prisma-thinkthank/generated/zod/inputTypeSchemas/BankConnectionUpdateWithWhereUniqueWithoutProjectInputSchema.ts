import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionUpdateWithoutProjectInputSchema } from './BankConnectionUpdateWithoutProjectInputSchema'
import { BankConnectionUncheckedUpdateWithoutProjectInputSchema } from './BankConnectionUncheckedUpdateWithoutProjectInputSchema'

export const BankConnectionUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.BankConnectionUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => BankConnectionUpdateWithoutProjectInputSchema),
                z.lazy(() => BankConnectionUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default BankConnectionUpdateWithWhereUniqueWithoutProjectInputSchema
