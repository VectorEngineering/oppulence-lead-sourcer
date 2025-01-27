import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutRequirementsInputSchema } from './LeadCreateNestedOneWithoutRequirementsInputSchema'

export const LeadRequirementCreateInputSchema: z.ZodType<Prisma.LeadRequirementCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        category: z.string(),
        priority: z.string(),
        description: z.string(),
        status: z.string(),
        notes: z.string().optional().nullable(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutRequirementsInputSchema)
    })
    .strict()

export default LeadRequirementCreateInputSchema
