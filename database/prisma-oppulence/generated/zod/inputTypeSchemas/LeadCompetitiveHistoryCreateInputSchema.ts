import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadCompetitiveAnalysisCreateNestedOneWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateNestedOneWithoutAnalysisHistoryInputSchema'

export const LeadCompetitiveHistoryCreateInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        changes: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        reason: z.string(),
        createdBy: z.string(),
        createdAt: z.coerce.date().optional(),
        analysis: z.lazy(() => LeadCompetitiveAnalysisCreateNestedOneWithoutAnalysisHistoryInputSchema)
    })
    .strict()

export default LeadCompetitiveHistoryCreateInputSchema
