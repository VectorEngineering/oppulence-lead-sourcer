import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealCreateWithoutActivitiesInputSchema } from './DealCreateWithoutActivitiesInputSchema'
import { DealUncheckedCreateWithoutActivitiesInputSchema } from './DealUncheckedCreateWithoutActivitiesInputSchema'

export const DealCreateOrConnectWithoutActivitiesInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutActivitiesInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DealCreateWithoutActivitiesInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutActivitiesInputSchema)
        ])
    })
    .strict()

export default DealCreateOrConnectWithoutActivitiesInputSchema
