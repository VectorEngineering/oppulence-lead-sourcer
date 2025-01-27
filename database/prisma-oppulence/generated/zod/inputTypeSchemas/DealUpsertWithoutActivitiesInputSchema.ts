import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealUpdateWithoutActivitiesInputSchema } from './DealUpdateWithoutActivitiesInputSchema'
import { DealUncheckedUpdateWithoutActivitiesInputSchema } from './DealUncheckedUpdateWithoutActivitiesInputSchema'
import { DealCreateWithoutActivitiesInputSchema } from './DealCreateWithoutActivitiesInputSchema'
import { DealUncheckedCreateWithoutActivitiesInputSchema } from './DealUncheckedCreateWithoutActivitiesInputSchema'
import { DealWhereInputSchema } from './DealWhereInputSchema'

export const DealUpsertWithoutActivitiesInputSchema: z.ZodType<Prisma.DealUpsertWithoutActivitiesInput> = z
    .object({
        update: z.union([
            z.lazy(() => DealUpdateWithoutActivitiesInputSchema),
            z.lazy(() => DealUncheckedUpdateWithoutActivitiesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DealCreateWithoutActivitiesInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutActivitiesInputSchema)
        ]),
        where: z.lazy(() => DealWhereInputSchema).optional()
    })
    .strict()

export default DealUpsertWithoutActivitiesInputSchema
