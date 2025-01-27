import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealCreateWithoutCompetitorsInputSchema } from './DealCreateWithoutCompetitorsInputSchema'
import { DealUncheckedCreateWithoutCompetitorsInputSchema } from './DealUncheckedCreateWithoutCompetitorsInputSchema'

export const DealCreateOrConnectWithoutCompetitorsInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutCompetitorsInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DealCreateWithoutCompetitorsInputSchema),
            z.lazy(() => DealUncheckedCreateWithoutCompetitorsInputSchema)
        ])
    })
    .strict()

export default DealCreateOrConnectWithoutCompetitorsInputSchema
