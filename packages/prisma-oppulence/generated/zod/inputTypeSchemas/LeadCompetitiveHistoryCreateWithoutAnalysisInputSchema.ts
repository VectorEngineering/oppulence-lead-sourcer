import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryCreateWithoutAnalysisInput> = z
    .object({
        id: z.string().cuid().optional(),
        changes: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        reason: z.string(),
        createdBy: z.string(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema
