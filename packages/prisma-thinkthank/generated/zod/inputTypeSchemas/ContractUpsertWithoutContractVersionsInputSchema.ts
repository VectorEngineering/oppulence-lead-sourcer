import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractUpdateWithoutContractVersionsInputSchema } from './ContractUpdateWithoutContractVersionsInputSchema'
import { ContractUncheckedUpdateWithoutContractVersionsInputSchema } from './ContractUncheckedUpdateWithoutContractVersionsInputSchema'
import { ContractCreateWithoutContractVersionsInputSchema } from './ContractCreateWithoutContractVersionsInputSchema'
import { ContractUncheckedCreateWithoutContractVersionsInputSchema } from './ContractUncheckedCreateWithoutContractVersionsInputSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractUpsertWithoutContractVersionsInputSchema: z.ZodType<Prisma.ContractUpsertWithoutContractVersionsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ContractUpdateWithoutContractVersionsInputSchema),
            z.lazy(() => ContractUncheckedUpdateWithoutContractVersionsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ContractCreateWithoutContractVersionsInputSchema),
            z.lazy(() => ContractUncheckedCreateWithoutContractVersionsInputSchema)
        ]),
        where: z.lazy(() => ContractWhereInputSchema).optional()
    })
    .strict()

export default ContractUpsertWithoutContractVersionsInputSchema
