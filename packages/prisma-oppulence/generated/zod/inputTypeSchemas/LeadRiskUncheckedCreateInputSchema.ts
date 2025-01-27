import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadRiskUncheckedCreateInputSchema: z.ZodType<Prisma.LeadRiskUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        category: z.string(),
        description: z.string(),
        impact: z.string(),
        probability: z.string(),
        mitigation: z.string(),
        status: z.string()
    })
    .strict()

export default LeadRiskUncheckedCreateInputSchema
