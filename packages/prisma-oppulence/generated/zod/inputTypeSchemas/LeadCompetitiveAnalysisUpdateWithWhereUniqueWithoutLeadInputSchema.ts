import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisUpdateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUpdateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema'

export const LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadCompetitiveAnalysisUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInputSchema
