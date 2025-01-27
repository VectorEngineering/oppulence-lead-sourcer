import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutContractVersionsInputSchema } from './ContractCreateWithoutContractVersionsInputSchema'
import { ContractUncheckedCreateWithoutContractVersionsInputSchema } from './ContractUncheckedCreateWithoutContractVersionsInputSchema'
import { ContractCreateOrConnectWithoutContractVersionsInputSchema } from './ContractCreateOrConnectWithoutContractVersionsInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'

export const ContractCreateNestedOneWithoutContractVersionsInputSchema: z.ZodType<Prisma.ContractCreateNestedOneWithoutContractVersionsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutContractVersionsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutContractVersionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractVersionsInputSchema).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional()
        })
        .strict()

export default ContractCreateNestedOneWithoutContractVersionsInputSchema
