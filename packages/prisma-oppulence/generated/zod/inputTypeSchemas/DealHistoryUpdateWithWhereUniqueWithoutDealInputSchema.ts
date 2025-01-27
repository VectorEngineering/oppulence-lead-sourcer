import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealHistoryWhereUniqueInputSchema } from './DealHistoryWhereUniqueInputSchema'
import { DealHistoryUpdateWithoutDealInputSchema } from './DealHistoryUpdateWithoutDealInputSchema'
import { DealHistoryUncheckedUpdateWithoutDealInputSchema } from './DealHistoryUncheckedUpdateWithoutDealInputSchema'

export const DealHistoryUpdateWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealHistoryUpdateWithWhereUniqueWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealHistoryWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => DealHistoryUpdateWithoutDealInputSchema),
            z.lazy(() => DealHistoryUncheckedUpdateWithoutDealInputSchema)
        ])
    })
    .strict()

export default DealHistoryUpdateWithWhereUniqueWithoutDealInputSchema
