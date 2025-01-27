import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutContractEventsInputSchema } from './ContractCreateWithoutContractEventsInputSchema'
import { ContractUncheckedCreateWithoutContractEventsInputSchema } from './ContractUncheckedCreateWithoutContractEventsInputSchema'
import { ContractCreateOrConnectWithoutContractEventsInputSchema } from './ContractCreateOrConnectWithoutContractEventsInputSchema'
import { ContractUpsertWithoutContractEventsInputSchema } from './ContractUpsertWithoutContractEventsInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'
import { ContractUpdateToOneWithWhereWithoutContractEventsInputSchema } from './ContractUpdateToOneWithWhereWithoutContractEventsInputSchema'
import { ContractUpdateWithoutContractEventsInputSchema } from './ContractUpdateWithoutContractEventsInputSchema'
import { ContractUncheckedUpdateWithoutContractEventsInputSchema } from './ContractUncheckedUpdateWithoutContractEventsInputSchema'

export const ContractUpdateOneRequiredWithoutContractEventsNestedInputSchema: z.ZodType<Prisma.ContractUpdateOneRequiredWithoutContractEventsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutContractEventsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutContractEventsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractEventsInputSchema).optional(),
            upsert: z.lazy(() => ContractUpsertWithoutContractEventsInputSchema).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ContractUpdateToOneWithWhereWithoutContractEventsInputSchema),
                    z.lazy(() => ContractUpdateWithoutContractEventsInputSchema),
                    z.lazy(() => ContractUncheckedUpdateWithoutContractEventsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ContractUpdateOneRequiredWithoutContractEventsNestedInputSchema
