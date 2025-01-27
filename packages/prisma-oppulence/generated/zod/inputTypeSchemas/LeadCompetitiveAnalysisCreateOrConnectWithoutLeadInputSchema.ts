import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema'

export const LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadCompetitiveAnalysisCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema
