import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionUpdateWithoutProjectInputSchema } from './BankConnectionUpdateWithoutProjectInputSchema'
import { BankConnectionUncheckedUpdateWithoutProjectInputSchema } from './BankConnectionUncheckedUpdateWithoutProjectInputSchema'
import { BankConnectionCreateWithoutProjectInputSchema } from './BankConnectionCreateWithoutProjectInputSchema'
import { BankConnectionUncheckedCreateWithoutProjectInputSchema } from './BankConnectionUncheckedCreateWithoutProjectInputSchema'

export const BankConnectionUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.BankConnectionUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => BankConnectionUpdateWithoutProjectInputSchema),
                z.lazy(() => BankConnectionUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => BankConnectionCreateWithoutProjectInputSchema),
                z.lazy(() => BankConnectionUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default BankConnectionUpsertWithWhereUniqueWithoutProjectInputSchema
