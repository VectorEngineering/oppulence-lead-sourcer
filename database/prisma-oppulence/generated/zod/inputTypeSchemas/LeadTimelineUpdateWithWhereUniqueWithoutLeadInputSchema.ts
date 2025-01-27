import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTimelineWhereUniqueInputSchema } from './LeadTimelineWhereUniqueInputSchema'
import { LeadTimelineUpdateWithoutLeadInputSchema } from './LeadTimelineUpdateWithoutLeadInputSchema'
import { LeadTimelineUncheckedUpdateWithoutLeadInputSchema } from './LeadTimelineUncheckedUpdateWithoutLeadInputSchema'

export const LeadTimelineUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadTimelineUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadTimelineWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadTimelineUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadTimelineUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadTimelineUpdateWithWhereUniqueWithoutLeadInputSchema
