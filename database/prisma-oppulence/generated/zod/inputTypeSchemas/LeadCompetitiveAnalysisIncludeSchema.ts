import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'
import { LeadCompetitiveHistoryFindManyArgsSchema } from '../outputTypeSchemas/LeadCompetitiveHistoryFindManyArgsSchema'
import { LeadCompetitiveAnalysisCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadCompetitiveAnalysisCountOutputTypeArgsSchema'

export const LeadCompetitiveAnalysisIncludeSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisInclude> = z
    .object({
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        analysisHistory: z.union([z.boolean(), z.lazy(() => LeadCompetitiveHistoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadCompetitiveAnalysisCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default LeadCompetitiveAnalysisIncludeSchema
