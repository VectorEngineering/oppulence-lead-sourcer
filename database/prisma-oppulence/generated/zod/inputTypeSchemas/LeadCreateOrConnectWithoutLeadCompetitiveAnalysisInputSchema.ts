import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadCreateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema'

export const LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadCreateWithoutLeadCompetitiveAnalysisInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema)
            ])
        })
        .strict()

export default LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema
