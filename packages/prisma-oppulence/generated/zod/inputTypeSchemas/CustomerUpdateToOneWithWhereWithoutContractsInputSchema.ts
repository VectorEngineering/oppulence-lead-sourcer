import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema'
import { CustomerUpdateWithoutContractsInputSchema } from './CustomerUpdateWithoutContractsInputSchema'
import { CustomerUncheckedUpdateWithoutContractsInputSchema } from './CustomerUncheckedUpdateWithoutContractsInputSchema'

export const CustomerUpdateToOneWithWhereWithoutContractsInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutContractsInput> =
    z
        .object({
            where: z.lazy(() => CustomerWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => CustomerUpdateWithoutContractsInputSchema),
                z.lazy(() => CustomerUncheckedUpdateWithoutContractsInputSchema)
            ])
        })
        .strict()

export default CustomerUpdateToOneWithWhereWithoutContractsInputSchema
