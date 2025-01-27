import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTimelineScalarWhereInputSchema } from './LeadTimelineScalarWhereInputSchema'
import { LeadTimelineUpdateManyMutationInputSchema } from './LeadTimelineUpdateManyMutationInputSchema'
import { LeadTimelineUncheckedUpdateManyWithoutLeadInputSchema } from './LeadTimelineUncheckedUpdateManyWithoutLeadInputSchema'

export const LeadTimelineUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadTimelineUpdateManyWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadTimelineScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => LeadTimelineUpdateManyMutationInputSchema),
            z.lazy(() => LeadTimelineUncheckedUpdateManyWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadTimelineUpdateManyWithWhereWithoutLeadInputSchema
