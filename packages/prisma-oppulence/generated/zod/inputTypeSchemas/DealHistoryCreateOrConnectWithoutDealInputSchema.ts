import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealHistoryWhereUniqueInputSchema } from './DealHistoryWhereUniqueInputSchema'
import { DealHistoryCreateWithoutDealInputSchema } from './DealHistoryCreateWithoutDealInputSchema'
import { DealHistoryUncheckedCreateWithoutDealInputSchema } from './DealHistoryUncheckedCreateWithoutDealInputSchema'

export const DealHistoryCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.DealHistoryCreateOrConnectWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealHistoryWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DealHistoryCreateWithoutDealInputSchema),
            z.lazy(() => DealHistoryUncheckedCreateWithoutDealInputSchema)
        ])
    })
    .strict()

export default DealHistoryCreateOrConnectWithoutDealInputSchema
