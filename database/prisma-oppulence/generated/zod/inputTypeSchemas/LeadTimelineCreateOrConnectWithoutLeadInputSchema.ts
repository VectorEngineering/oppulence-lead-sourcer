import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTimelineWhereUniqueInputSchema } from './LeadTimelineWhereUniqueInputSchema'
import { LeadTimelineCreateWithoutLeadInputSchema } from './LeadTimelineCreateWithoutLeadInputSchema'
import { LeadTimelineUncheckedCreateWithoutLeadInputSchema } from './LeadTimelineUncheckedCreateWithoutLeadInputSchema'

export const LeadTimelineCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadTimelineCreateOrConnectWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadTimelineWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadTimelineCreateWithoutLeadInputSchema),
            z.lazy(() => LeadTimelineUncheckedCreateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadTimelineCreateOrConnectWithoutLeadInputSchema
