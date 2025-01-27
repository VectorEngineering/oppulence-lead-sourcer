import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutContractDocumentsInputSchema } from './ContractCreateWithoutContractDocumentsInputSchema'
import { ContractUncheckedCreateWithoutContractDocumentsInputSchema } from './ContractUncheckedCreateWithoutContractDocumentsInputSchema'
import { ContractCreateOrConnectWithoutContractDocumentsInputSchema } from './ContractCreateOrConnectWithoutContractDocumentsInputSchema'
import { ContractUpsertWithoutContractDocumentsInputSchema } from './ContractUpsertWithoutContractDocumentsInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateToOneWithWhereWithoutContractDocumentsInputSchema } from './ContractUpdateToOneWithWhereWithoutContractDocumentsInputSchema'
import { ContractUpdateWithoutContractDocumentsInputSchema } from './ContractUpdateWithoutContractDocumentsInputSchema'
import { ContractUncheckedUpdateWithoutContractDocumentsInputSchema } from './ContractUncheckedUpdateWithoutContractDocumentsInputSchema'

export const ContractUpdateOneRequiredWithoutContractDocumentsNestedInputSchema: z.ZodType<Prisma.ContractUpdateOneRequiredWithoutContractDocumentsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutContractDocumentsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutContractDocumentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractDocumentsInputSchema).optional(),
            upsert: z.lazy(() => ContractUpsertWithoutContractDocumentsInputSchema).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ContractUpdateToOneWithWhereWithoutContractDocumentsInputSchema),
                    z.lazy(() => ContractUpdateWithoutContractDocumentsInputSchema),
                    z.lazy(() => ContractUncheckedUpdateWithoutContractDocumentsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ContractUpdateOneRequiredWithoutContractDocumentsNestedInputSchema
