import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutRisksInputSchema } from './LeadCreateNestedOneWithoutRisksInputSchema'

export const LeadRiskCreateInputSchema: z.ZodType<Prisma.LeadRiskCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        category: z.string(),
        description: z.string(),
        impact: z.string(),
        probability: z.string(),
        mitigation: z.string(),
        status: z.string(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutRisksInputSchema)
    })
    .strict()

export default LeadRiskCreateInputSchema
