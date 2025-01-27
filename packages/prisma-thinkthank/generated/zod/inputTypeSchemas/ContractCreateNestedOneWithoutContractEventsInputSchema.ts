import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateWithoutContractEventsInputSchema } from './ContractCreateWithoutContractEventsInputSchema'
import { ContractUncheckedCreateWithoutContractEventsInputSchema } from './ContractUncheckedCreateWithoutContractEventsInputSchema'
import { ContractCreateOrConnectWithoutContractEventsInputSchema } from './ContractCreateOrConnectWithoutContractEventsInputSchema'
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema'

export const ContractCreateNestedOneWithoutContractEventsInputSchema: z.ZodType<Prisma.ContractCreateNestedOneWithoutContractEventsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractCreateWithoutContractEventsInputSchema),
                    z.lazy(() => ContractUncheckedCreateWithoutContractEventsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractEventsInputSchema).optional(),
            connect: z.lazy(() => ContractWhereUniqueInputSchema).optional()
        })
        .strict()

export default ContractCreateNestedOneWithoutContractEventsInputSchema
