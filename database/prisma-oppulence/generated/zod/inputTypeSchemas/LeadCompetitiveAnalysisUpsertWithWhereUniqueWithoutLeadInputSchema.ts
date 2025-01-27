import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisUpdateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUpdateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateWithoutLeadInputSchema'
import { LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema'

export const LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadCompetitiveAnalysisUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadCompetitiveAnalysisCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInputSchema
