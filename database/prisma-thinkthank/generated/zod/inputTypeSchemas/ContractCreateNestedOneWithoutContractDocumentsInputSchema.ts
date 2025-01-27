import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutContractDocumentsInputSchema } from './ContractCreateWithoutContractDocumentsInputSchema'
import { ContractUncheckedCreateWithoutContractDocumentsInputSchema } from './ContractUncheckedCreateWithoutContractDocumentsInputSchema'
import { ContractCreateOrConnectWithoutContractDocumentsInputSchema } from './ContractCreateOrConnectWithoutContractDocumentsInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'

export const ContractCreateNestedOneWithoutContractDocumentsInputSchema: z.ZodType<Prisma.ContractCreateNestedOneWithoutContractDocumentsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutContractDocumentsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutContractDocumentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractDocumentsInputSchema).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional()
        })
        .strict()

export default ContractCreateNestedOneWithoutContractDocumentsInputSchema
