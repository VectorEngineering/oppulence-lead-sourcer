import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionScalarWhereInputSchema } from './BankConnectionScalarWhereInputSchema'
import { BankConnectionUpdateManyMutationInputSchema } from './BankConnectionUpdateManyMutationInputSchema'
import { BankConnectionUncheckedUpdateManyWithoutProjectInputSchema } from './BankConnectionUncheckedUpdateManyWithoutProjectInputSchema'

export const BankConnectionUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.BankConnectionUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => BankConnectionUpdateManyMutationInputSchema),
                z.lazy(() => BankConnectionUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default BankConnectionUpdateManyWithWhereWithoutProjectInputSchema
