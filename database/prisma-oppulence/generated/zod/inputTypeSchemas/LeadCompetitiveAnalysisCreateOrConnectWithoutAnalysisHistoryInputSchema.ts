import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema'

export const LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema
