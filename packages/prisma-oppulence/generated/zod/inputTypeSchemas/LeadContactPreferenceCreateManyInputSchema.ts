import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadContactPreferenceCreateManyInputSchema: z.ZodType<Prisma.LeadContactPreferenceCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        method: z.string(),
        preferredTime: z.string(),
        preferredDays: z.string(),
        timezone: z.string(),
        notes: z.string().optional().nullable(),
        isActive: z.boolean().optional()
    })
    .strict()

export default LeadContactPreferenceCreateManyInputSchema
