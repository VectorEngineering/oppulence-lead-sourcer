import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'
import { DealTaskUpdateWithoutDealInputSchema } from './DealTaskUpdateWithoutDealInputSchema'
import { DealTaskUncheckedUpdateWithoutDealInputSchema } from './DealTaskUncheckedUpdateWithoutDealInputSchema'
import { DealTaskCreateWithoutDealInputSchema } from './DealTaskCreateWithoutDealInputSchema'
import { DealTaskUncheckedCreateWithoutDealInputSchema } from './DealTaskUncheckedCreateWithoutDealInputSchema'

export const DealTaskUpsertWithWhereUniqueWithoutDealInputSchema: z.ZodType<Prisma.DealTaskUpsertWithWhereUniqueWithoutDealInput> = z
    .object({
        where: z.lazy(() => DealTaskWhereUniqueInputSchema),
        update: z.union([z.lazy(() => DealTaskUpdateWithoutDealInputSchema), z.lazy(() => DealTaskUncheckedUpdateWithoutDealInputSchema)]),
        create: z.union([z.lazy(() => DealTaskCreateWithoutDealInputSchema), z.lazy(() => DealTaskUncheckedCreateWithoutDealInputSchema)])
    })
    .strict()

export default DealTaskUpsertWithWhereUniqueWithoutDealInputSchema
