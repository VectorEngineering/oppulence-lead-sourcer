import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadLabelUncheckedCreateInputSchema: z.ZodType<Prisma.LeadLabelUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        name: z.string(),
        color: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default LeadLabelUncheckedCreateInputSchema
