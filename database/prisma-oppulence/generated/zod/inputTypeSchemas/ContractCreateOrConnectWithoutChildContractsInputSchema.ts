import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractCreateWithoutChildContractsInputSchema } from './ContractCreateWithoutChildContractsInputSchema'
import { ContractUncheckedCreateWithoutChildContractsInputSchema } from './ContractUncheckedCreateWithoutChildContractsInputSchema'

export const ContractCreateOrConnectWithoutChildContractsInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutChildContractsInput> =
    z
        .object({
            where: z.lazy(() => ContractWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ContractCreateWithoutChildContractsInputSchema),
                z.lazy(() => ContractUncheckedCreateWithoutChildContractsInputSchema)
            ])
        })
        .strict()

export default ContractCreateOrConnectWithoutChildContractsInputSchema
