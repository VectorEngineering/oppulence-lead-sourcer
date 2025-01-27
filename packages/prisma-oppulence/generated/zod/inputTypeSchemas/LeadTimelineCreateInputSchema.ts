import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutTimelinesInputSchema } from './LeadCreateNestedOneWithoutTimelinesInputSchema'

export const LeadTimelineCreateInputSchema: z.ZodType<Prisma.LeadTimelineCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        milestone: z.string(),
        targetDate: z.coerce.date(),
        actualDate: z.coerce.date().optional().nullable(),
        status: z.string(),
        notes: z.string().optional().nullable(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutTimelinesInputSchema)
    })
    .strict()

export default LeadTimelineCreateInputSchema
