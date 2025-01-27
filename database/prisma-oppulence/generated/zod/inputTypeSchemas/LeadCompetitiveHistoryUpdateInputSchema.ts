import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LeadCompetitiveAnalysisUpdateOneRequiredWithoutAnalysisHistoryNestedInputSchema } from './LeadCompetitiveAnalysisUpdateOneRequiredWithoutAnalysisHistoryNestedInputSchema'

export const LeadCompetitiveHistoryUpdateInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        changes: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        reason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        analysis: z.lazy(() => LeadCompetitiveAnalysisUpdateOneRequiredWithoutAnalysisHistoryNestedInputSchema).optional()
    })
    .strict()

export default LeadCompetitiveHistoryUpdateInputSchema
