import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorWhereUniqueInputSchema } from './DealCompetitorWhereUniqueInputSchema'
import { DealCompetitorUpdateWithoutDealInputSchema } from './DealCompetitorUpdateWithoutDealInputSchema'
import { DealCompetitorUncheckedUpdateWithoutDealInputSchema } from './DealCompetitorUncheckedUpdateWithoutDealInputSchema'
import { DealCompetitorCreateWithoutDealInputSchema } from './DealCompetitorCreateWithoutDealInputSchema'
import { DealCompetitorUncheckedCreateWithoutDealInputSchema } from './DealCompetitorUncheckedCreateWithoutDealInputSchema'

export const DealCompetitorUpsertWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorUpsertWithWhereUniqueWithoutDealInput> =
    z
        .object({
            where: z.lazy(() => DealCompetitorWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => DealCompetitorUpdateWithoutDealInputSchema),
                z.lazy(() => DealCompetitorUncheckedUpdateWithoutDealInputSchema)
            ]),
            create: z.union([
                z.lazy(() => DealCompetitorCreateWithoutDealInputSchema),
                z.lazy(() => DealCompetitorUncheckedCreateWithoutDealInputSchema)
            ])
        })
        .strict()

export default DealCompetitorUpsertWithWhereUniqueWithoutDealInputSchema
