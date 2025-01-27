import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisWhereInputSchema } from './LeadCompetitiveAnalysisWhereInputSchema'
import { LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema'

export const LeadCompetitiveAnalysisUpdateToOneWithWhereWithoutAnalysisHistoryInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpdateToOneWithWhereWithoutAnalysisHistoryInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveAnalysisUpdateToOneWithWhereWithoutAnalysisHistoryInputSchema
