import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadCreateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema } from './LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUpsertWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUpsertWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema'
import { LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema'

export const LeadUpdateOneRequiredWithoutLeadCompetitiveAnalysisNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadCompetitiveAnalysisNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutLeadCompetitiveAnalysisInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema).optional(),
            upsert: z.lazy(() => LeadUpsertWithoutLeadCompetitiveAnalysisInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadCompetitiveAnalysisInputSchema),
                    z.lazy(() => LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema),
                    z.lazy(() => LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadUpdateOneRequiredWithoutLeadCompetitiveAnalysisNestedInputSchema
