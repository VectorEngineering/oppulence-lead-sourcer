import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'

export const LeadDecisionMakerSelectSchema: z.ZodType<Prisma.LeadDecisionMakerSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        name: z.boolean().optional(),
        title: z.boolean().optional(),
        email: z.boolean().optional(),
        phone: z.boolean().optional(),
        influence: z.boolean().optional(),
        notes: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export default LeadDecisionMakerSelectSchema
