import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractUpdateWithoutChildContractsInputSchema } from './ContractUpdateWithoutChildContractsInputSchema'
import { ContractUncheckedUpdateWithoutChildContractsInputSchema } from './ContractUncheckedUpdateWithoutChildContractsInputSchema'
import { ContractCreateWithoutChildContractsInputSchema } from './ContractCreateWithoutChildContractsInputSchema'
import { ContractUncheckedCreateWithoutChildContractsInputSchema } from './ContractUncheckedCreateWithoutChildContractsInputSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractUpsertWithoutChildContractsInputSchema: z.ZodType<Prisma.ContractUpsertWithoutChildContractsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ContractUpdateWithoutChildContractsInputSchema),
            z.lazy(() => ContractUncheckedUpdateWithoutChildContractsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ContractCreateWithoutChildContractsInputSchema),
            z.lazy(() => ContractUncheckedCreateWithoutChildContractsInputSchema)
        ]),
        where: z.lazy(() => ContractWhereInputSchema).optional()
    })
    .strict()

export default ContractUpsertWithoutChildContractsInputSchema
