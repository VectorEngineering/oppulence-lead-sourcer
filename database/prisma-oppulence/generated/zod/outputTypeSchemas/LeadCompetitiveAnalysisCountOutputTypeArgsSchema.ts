import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveAnalysisCountOutputTypeSelectSchema } from './LeadCompetitiveAnalysisCountOutputTypeSelectSchema'

export const LeadCompetitiveAnalysisCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadCompetitiveAnalysisCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default LeadCompetitiveAnalysisCountOutputTypeSelectSchema
