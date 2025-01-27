import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveAnalysisArgsSchema } from '../outputTypeSchemas/LeadCompetitiveAnalysisArgsSchema'

export const LeadCompetitiveHistorySelectSchema: z.ZodType<Prisma.LeadCompetitiveHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        analysisId: z.boolean().optional(),
        changes: z.boolean().optional(),
        reason: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        analysis: z.union([z.boolean(), z.lazy(() => LeadCompetitiveAnalysisArgsSchema)]).optional()
    })
    .strict()

export default LeadCompetitiveHistorySelectSchema
