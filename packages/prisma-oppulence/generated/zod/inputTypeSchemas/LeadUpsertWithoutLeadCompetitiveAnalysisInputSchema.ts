import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadCreateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutLeadCompetitiveAnalysisInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadCompetitiveAnalysisInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutLeadCompetitiveAnalysisInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutLeadCompetitiveAnalysisInputSchema
