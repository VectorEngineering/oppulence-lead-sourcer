import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutContractVersionsInputSchema } from './ContractCreateWithoutContractVersionsInputSchema'
import { ContractUncheckedCreateWithoutContractVersionsInputSchema } from './ContractUncheckedCreateWithoutContractVersionsInputSchema'
import { ContractCreateOrConnectWithoutContractVersionsInputSchema } from './ContractCreateOrConnectWithoutContractVersionsInputSchema'
import { ContractUpsertWithoutContractVersionsInputSchema } from './ContractUpsertWithoutContractVersionsInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateToOneWithWhereWithoutContractVersionsInputSchema } from './ContractUpdateToOneWithWhereWithoutContractVersionsInputSchema'
import { ContractUpdateWithoutContractVersionsInputSchema } from './ContractUpdateWithoutContractVersionsInputSchema'
import { ContractUncheckedUpdateWithoutContractVersionsInputSchema } from './ContractUncheckedUpdateWithoutContractVersionsInputSchema'

export const ContractUpdateOneRequiredWithoutContractVersionsNestedInputSchema: z.ZodType<Prisma.ContractUpdateOneRequiredWithoutContractVersionsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutContractVersionsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutContractVersionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractVersionsInputSchema).optional(),
            upsert: z.lazy(() => ContractUpsertWithoutContractVersionsInputSchema).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ContractUpdateToOneWithWhereWithoutContractVersionsInputSchema),
                    z.lazy(() => ContractUpdateWithoutContractVersionsInputSchema),
                    z.lazy(() => ContractUncheckedUpdateWithoutContractVersionsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ContractUpdateOneRequiredWithoutContractVersionsNestedInputSchema
