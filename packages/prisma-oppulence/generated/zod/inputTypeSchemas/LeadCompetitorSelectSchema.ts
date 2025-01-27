import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadCompetitorSelectSchema: z.ZodType<Prisma.LeadCompetitorSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        name: z.boolean().optional(),
        strengths: z.boolean().optional(),
        weaknesses: z.boolean().optional(),
        pricing: z.boolean().optional(),
        differentiator: z.boolean().optional(),
        status: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadCompetitorSelectSchema
