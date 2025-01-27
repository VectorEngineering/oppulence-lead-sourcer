import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'
import { DealTaskCreateWithoutDealInputSchema } from './DealTaskCreateWithoutDealInputSchema'
import { DealTaskUncheckedCreateWithoutDealInputSchema } from './DealTaskUncheckedCreateWithoutDealInputSchema'

export const DealTaskCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.DealTaskCreateOrConnectWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealTaskWhereUniqueInputSchema),
        create: z.union([z.lazy(() => DealTaskCreateWithoutDealInputSchema), z.lazy(() => DealTaskUncheckedCreateWithoutDealInputSchema)])
    })
    .strict()

export default DealTaskCreateOrConnectWithoutDealInputSchema
