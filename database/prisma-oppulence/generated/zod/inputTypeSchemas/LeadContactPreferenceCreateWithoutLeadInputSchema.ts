import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadContactPreferenceCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceCreateWithoutLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        method: z.string(),
        preferredTime: z.string(),
        preferredDays: z.string(),
        timezone: z.string(),
        notes: z.string().optional().nullable(),
        isActive: z.boolean().optional()
    })
    .strict()

export default LeadContactPreferenceCreateWithoutLeadInputSchema
