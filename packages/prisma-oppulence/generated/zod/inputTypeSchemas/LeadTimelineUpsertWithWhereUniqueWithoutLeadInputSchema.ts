import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTimelineWhereUniqueInputSchema } from './LeadTimelineWhereUniqueInputSchema'
import { LeadTimelineUpdateWithoutLeadInputSchema } from './LeadTimelineUpdateWithoutLeadInputSchema'
import { LeadTimelineUncheckedUpdateWithoutLeadInputSchema } from './LeadTimelineUncheckedUpdateWithoutLeadInputSchema'
import { LeadTimelineCreateWithoutLeadInputSchema } from './LeadTimelineCreateWithoutLeadInputSchema'
import { LeadTimelineUncheckedCreateWithoutLeadInputSchema } from './LeadTimelineUncheckedCreateWithoutLeadInputSchema'

export const LeadTimelineUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadTimelineUpsertWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadTimelineWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadTimelineUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadTimelineUncheckedUpdateWithoutLeadInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadTimelineCreateWithoutLeadInputSchema),
                z.lazy(() => LeadTimelineUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadTimelineUpsertWithWhereUniqueWithoutLeadInputSchema
