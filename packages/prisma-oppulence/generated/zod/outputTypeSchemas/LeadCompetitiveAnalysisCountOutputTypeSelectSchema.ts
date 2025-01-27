import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const LeadCompetitiveAnalysisCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCountOutputTypeSelect> = z
    .object({
        analysisHistory: z.boolean().optional()
    })
    .strict()

export default LeadCompetitiveAnalysisCountOutputTypeSelectSchema
