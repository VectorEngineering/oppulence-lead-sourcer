import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractUpdateWithoutContractEventsInputSchema } from './ContractUpdateWithoutContractEventsInputSchema'
import { ContractUncheckedUpdateWithoutContractEventsInputSchema } from './ContractUncheckedUpdateWithoutContractEventsInputSchema'
import { ContractCreateWithoutContractEventsInputSchema } from './ContractCreateWithoutContractEventsInputSchema'
import { ContractUncheckedCreateWithoutContractEventsInputSchema } from './ContractUncheckedCreateWithoutContractEventsInputSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractUpsertWithoutContractEventsInputSchema: z.ZodType<Prisma.ContractUpsertWithoutContractEventsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ContractUpdateWithoutContractEventsInputSchema),
            z.lazy(() => ContractUncheckedUpdateWithoutContractEventsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ContractCreateWithoutContractEventsInputSchema),
            z.lazy(() => ContractUncheckedCreateWithoutContractEventsInputSchema)
        ]),
        where: z.lazy(() => ContractWhereInputSchema).optional()
    })
    .strict()

export default ContractUpsertWithoutContractEventsInputSchema
