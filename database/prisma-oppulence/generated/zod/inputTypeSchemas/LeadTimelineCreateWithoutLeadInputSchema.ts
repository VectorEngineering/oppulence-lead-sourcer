import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadTimelineCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadTimelineCreateWithoutLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        milestone: z.string(),
        targetDate: z.coerce.date(),
        actualDate: z.coerce.date().optional().nullable(),
        status: z.string(),
        notes: z.string().optional().nullable()
    })
    .strict()

export default LeadTimelineCreateWithoutLeadInputSchema
