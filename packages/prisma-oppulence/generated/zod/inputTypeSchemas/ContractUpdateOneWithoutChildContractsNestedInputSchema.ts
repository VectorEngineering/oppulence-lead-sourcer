import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutChildContractsInputSchema } from './ContractCreateWithoutChildContractsInputSchema'
import { ContractUncheckedCreateWithoutChildContractsInputSchema } from './ContractUncheckedCreateWithoutChildContractsInputSchema'
import { ContractCreateOrConnectWithoutChildContractsInputSchema } from './ContractCreateOrConnectWithoutChildContractsInputSchema'
import { ContractUpsertWithoutChildContractsInputSchema } from './ContractUpsertWithoutChildContractsInputSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateToOneWithWhereWithoutChildContractsInputSchema } from './ContractUpdateToOneWithWhereWithoutChildContractsInputSchema'
import { ContractUpdateWithoutChildContractsInputSchema } from './ContractUpdateWithoutChildContractsInputSchema'
import { ContractUncheckedUpdateWithoutChildContractsInputSchema } from './ContractUncheckedUpdateWithoutChildContractsInputSchema'

export const ContractUpdateOneWithoutChildContractsNestedInputSchema: z.ZodType<Prisma.ContractUpdateOneWithoutChildContractsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutChildContractsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutChildContractsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutChildContractsInputSchema).optional(),
            upsert: z.lazy(() => ContractUpsertWithoutChildContractsInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => ContractWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => ContractWhereInputSchema)]).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ContractUpdateToOneWithWhereWithoutChildContractsInputSchema),
                    z.lazy(() => ContractUpdateWithoutChildContractsInputSchema),
                    z.lazy(() => ContractUncheckedUpdateWithoutChildContractsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ContractUpdateOneWithoutChildContractsNestedInputSchema
