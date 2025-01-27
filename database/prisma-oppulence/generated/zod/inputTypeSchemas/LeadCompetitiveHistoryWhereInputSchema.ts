import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadCompetitiveAnalysisRelationFilterSchema } from './LeadCompetitiveAnalysisRelationFilterSchema'
import { LeadCompetitiveAnalysisWhereInputSchema } from './LeadCompetitiveAnalysisWhereInputSchema'

export const LeadCompetitiveHistoryWhereInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadCompetitiveHistoryWhereInputSchema), z.lazy(() => LeadCompetitiveHistoryWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadCompetitiveHistoryWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadCompetitiveHistoryWhereInputSchema), z.lazy(() => LeadCompetitiveHistoryWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        analysisId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        changes: z.lazy(() => JsonFilterSchema).optional(),
        reason: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdBy: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        analysis: z
            .union([z.lazy(() => LeadCompetitiveAnalysisRelationFilterSchema), z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema)])
            .optional()
    })
    .strict()

export default LeadCompetitiveHistoryWhereInputSchema
