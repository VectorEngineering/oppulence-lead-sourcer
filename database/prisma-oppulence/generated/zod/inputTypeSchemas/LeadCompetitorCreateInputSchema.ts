import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutCompetitorsInputSchema } from './LeadCreateNestedOneWithoutCompetitorsInputSchema'

export const LeadCompetitorCreateInputSchema: z.ZodType<Prisma.LeadCompetitorCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        strengths: z.string(),
        weaknesses: z.string(),
        pricing: z.string().optional().nullable(),
        differentiator: z.string().optional().nullable(),
        status: z.string(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutCompetitorsInputSchema)
    })
    .strict()

export default LeadCompetitorCreateInputSchema
