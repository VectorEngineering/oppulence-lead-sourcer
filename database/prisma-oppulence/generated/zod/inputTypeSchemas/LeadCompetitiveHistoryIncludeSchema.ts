import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveAnalysisArgsSchema } from '../outputTypeSchemas/LeadCompetitiveAnalysisArgsSchema'

export const LeadCompetitiveHistoryIncludeSchema: z.ZodType<Prisma.LeadCompetitiveHistoryInclude> = z
    .object({
        analysis: z.union([z.boolean(), z.lazy(() => LeadCompetitiveAnalysisArgsSchema)]).optional()
    })
    .strict()

export default LeadCompetitiveHistoryIncludeSchema
