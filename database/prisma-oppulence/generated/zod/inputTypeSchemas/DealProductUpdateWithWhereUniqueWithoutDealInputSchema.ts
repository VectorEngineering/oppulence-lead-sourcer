import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealProductWhereUniqueInputSchema } from './DealProductWhereUniqueInputSchema'
import { DealProductUpdateWithoutDealInputSchema } from './DealProductUpdateWithoutDealInputSchema'
import { DealProductUncheckedUpdateWithoutDealInputSchema } from './DealProductUncheckedUpdateWithoutDealInputSchema'

export const DealProductUpdateWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealProductUpdateWithWhereUniqueWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealProductWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => DealProductUpdateWithoutDealInputSchema),
            z.lazy(() => DealProductUncheckedUpdateWithoutDealInputSchema)
        ])
    })
    .strict()

export default DealProductUpdateWithWhereUniqueWithoutDealInputSchema
