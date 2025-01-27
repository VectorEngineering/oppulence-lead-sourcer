import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorWhereUniqueInputSchema } from './DealCompetitorWhereUniqueInputSchema'
import { DealCompetitorUpdateWithoutDealInputSchema } from './DealCompetitorUpdateWithoutDealInputSchema'
import { DealCompetitorUncheckedUpdateWithoutDealInputSchema } from './DealCompetitorUncheckedUpdateWithoutDealInputSchema'

export const DealCompetitorUpdateWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorUpdateWithWhereUniqueWithoutDealInput> =
    z
        .object({
            where: z.lazy(() => DealCompetitorWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => DealCompetitorUpdateWithoutDealInputSchema),
                z.lazy(() => DealCompetitorUncheckedUpdateWithoutDealInputSchema)
            ])
        })
        .strict()

export default DealCompetitorUpdateWithWhereUniqueWithoutDealInputSchema
