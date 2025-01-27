import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealProductWhereUniqueInputSchema } from './DealProductWhereUniqueInputSchema'
import { DealProductUpdateWithoutDealInputSchema } from './DealProductUpdateWithoutDealInputSchema'
import { DealProductUncheckedUpdateWithoutDealInputSchema } from './DealProductUncheckedUpdateWithoutDealInputSchema'
import { DealProductCreateWithoutDealInputSchema } from './DealProductCreateWithoutDealInputSchema'
import { DealProductUncheckedCreateWithoutDealInputSchema } from './DealProductUncheckedCreateWithoutDealInputSchema'

export const DealProductUpsertWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealProductUpsertWithWhereUniqueWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealProductWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DealProductUpdateWithoutDealInputSchema),
            z.lazy(() => DealProductUncheckedUpdateWithoutDealInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DealProductCreateWithoutDealInputSchema),
            z.lazy(() => DealProductUncheckedCreateWithoutDealInputSchema)
        ])
    })
    .strict()

export default DealProductUpsertWithWhereUniqueWithoutDealInputSchema
