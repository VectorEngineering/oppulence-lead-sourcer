import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityWhereUniqueInputSchema } from './DealActivityWhereUniqueInputSchema'
import { DealActivityUpdateWithoutDealInputSchema } from './DealActivityUpdateWithoutDealInputSchema'
import { DealActivityUncheckedUpdateWithoutDealInputSchema } from './DealActivityUncheckedUpdateWithoutDealInputSchema'
import { DealActivityCreateWithoutDealInputSchema } from './DealActivityCreateWithoutDealInputSchema'
import { DealActivityUncheckedCreateWithoutDealInputSchema } from './DealActivityUncheckedCreateWithoutDealInputSchema'

export const DealActivityUpsertWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealActivityUpsertWithWhereUniqueWithoutDealInput> =
    z
        .object({
            where: z.lazy(() => DealActivityWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => DealActivityUpdateWithoutDealInputSchema),
                z.lazy(() => DealActivityUncheckedUpdateWithoutDealInputSchema)
            ]),
            create: z.union([
                z.lazy(() => DealActivityCreateWithoutDealInputSchema),
                z.lazy(() => DealActivityUncheckedCreateWithoutDealInputSchema)
            ])
        })
        .strict()

export default DealActivityUpsertWithWhereUniqueWithoutDealInputSchema
