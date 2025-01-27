import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from './LeadCompetitiveHistoryWhereUniqueInputSchema'
import { LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema'
import { LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema'

export const LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema),
                z.lazy(() => LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema
