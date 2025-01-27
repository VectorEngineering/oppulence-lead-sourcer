import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisUpsertWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUpsertWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisUpdateToOneWithWhereWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUpdateToOneWithWhereWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema'
import { LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema'

export const LeadCompetitiveAnalysisUpdateOneRequiredWithoutAnalysisHistoryNestedInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpdateOneRequiredWithoutAnalysisHistoryNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema).optional(),
            upsert: z.lazy(() => LeadCompetitiveAnalysisUpsertWithoutAnalysisHistoryInputSchema).optional(),
            connect: z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisUpdateToOneWithWhereWithoutAnalysisHistoryInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadCompetitiveAnalysisUpdateOneRequiredWithoutAnalysisHistoryNestedInputSchema
