import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveHistoryScalarWhereInputSchema } from './LeadCompetitiveHistoryScalarWhereInputSchema'
import { LeadCompetitiveHistoryUpdateManyMutationInputSchema } from './LeadCompetitiveHistoryUpdateManyMutationInputSchema'
import { LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisInputSchema'

export const LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInput> =
    z
        .object({
            where: z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadCompetitiveHistoryUpdateManyMutationInputSchema),
                z.lazy(() => LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisInputSchema)
            ])
        })
        .strict()

export default LeadCompetitiveHistoryUpdateManyWithWhereWithoutAnalysisInputSchema
