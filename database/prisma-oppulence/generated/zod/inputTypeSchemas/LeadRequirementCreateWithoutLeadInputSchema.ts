import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadRequirementCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadRequirementCreateWithoutLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        category: z.string(),
        priority: z.string(),
        description: z.string(),
        status: z.string(),
        notes: z.string().optional().nullable()
    })
    .strict()

export default LeadRequirementCreateWithoutLeadInputSchema
