import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'
import { ContractUpdateWithoutContractApprovalsInputSchema } from './ContractUpdateWithoutContractApprovalsInputSchema'
import { ContractUncheckedUpdateWithoutContractApprovalsInputSchema } from './ContractUncheckedUpdateWithoutContractApprovalsInputSchema'

export const ContractUpdateToOneWithWhereWithoutContractApprovalsInputSchema: z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutContractApprovalsInput> =
    z
        .object({
            where: z.lazy(() => ContractWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ContractUpdateWithoutContractApprovalsInputSchema),
                z.lazy(() => ContractUncheckedUpdateWithoutContractApprovalsInputSchema)
            ])
        })
        .strict()

export default ContractUpdateToOneWithWhereWithoutContractApprovalsInputSchema
