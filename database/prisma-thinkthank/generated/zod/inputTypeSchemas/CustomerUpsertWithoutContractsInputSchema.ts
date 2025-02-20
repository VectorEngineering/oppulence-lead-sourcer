import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerUpdateWithoutContractsInputSchema } from './CustomerUpdateWithoutContractsInputSchema'
import { CustomerUncheckedUpdateWithoutContractsInputSchema } from './CustomerUncheckedUpdateWithoutContractsInputSchema'
import { CustomerCreateWithoutContractsInputSchema } from './CustomerCreateWithoutContractsInputSchema'
import { CustomerUncheckedCreateWithoutContractsInputSchema } from './CustomerUncheckedCreateWithoutContractsInputSchema'
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema'

export const CustomerUpsertWithoutContractsInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutContractsInput> = z
    .object({
        update: z.union([
            z.lazy(() => CustomerUpdateWithoutContractsInputSchema),
            z.lazy(() => CustomerUncheckedUpdateWithoutContractsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => CustomerCreateWithoutContractsInputSchema),
            z.lazy(() => CustomerUncheckedCreateWithoutContractsInputSchema)
        ]),
        where: z.lazy(() => CustomerWhereInputSchema).optional()
    })
    .strict()

export default CustomerUpsertWithoutContractsInputSchema
