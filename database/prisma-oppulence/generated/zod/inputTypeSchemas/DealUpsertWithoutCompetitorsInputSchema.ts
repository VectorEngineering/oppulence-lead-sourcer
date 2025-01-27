import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealUpdateWithoutCompetitorsInputSchema } from './DealUpdateWithoutCompetitorsInputSchema'
import { DealUncheckedUpdateWithoutCompetitorsInputSchema } from './DealUncheckedUpdateWithoutCompetitorsInputSchema'
import { DealCreateWithoutCompetitorsInputSchema } from './DealCreateWithoutCompetitorsInputSchema'
import { DealUncheckedCreateWithoutCompetitorsInputSchema } from './DealUncheckedCreateWithoutCompetitorsInputSchema'
import { DealWhereInputSchema } from './DealWhereInputSchema'

export const DealUpsertWithoutCompetitorsInputSchema: z.ZodType<Prisma.DealUpsertWithoutCompetitorsInput> = z
    .object({
        update: z.union([
            z.lazy(() => DealUpdateWithoutCompetitorsInputSchema),
            z.lazy(() => DealUncheckedUpdateWithoutCompetitorsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => DealCreateWithoutCompetitorsInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutCompetitorsInputSchema)
        ]),
        where: z.lazy(() => DealWhereInputSchema).optional()
    })
    .strict()

export default DealUpsertWithoutCompetitorsInputSchema
