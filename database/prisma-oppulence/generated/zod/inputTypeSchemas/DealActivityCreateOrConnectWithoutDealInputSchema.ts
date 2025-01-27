import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityWhereUniqueInputSchema } from './DealActivityWhereUniqueInputSchema'
import { DealActivityCreateWithoutDealInputSchema } from './DealActivityCreateWithoutDealInputSchema'
import { DealActivityUncheckedCreateWithoutDealInputSchema } from './DealActivityUncheckedCreateWithoutDealInputSchema'

export const DealActivityCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.DealActivityCreateOrConnectWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealActivityWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DealActivityCreateWithoutDealInputSchema),
            z.lazy(() => DealActivityUncheckedCreateWithoutDealInputSchema)
        ])
    })
    .strict()

export default DealActivityCreateOrConnectWithoutDealInputSchema
