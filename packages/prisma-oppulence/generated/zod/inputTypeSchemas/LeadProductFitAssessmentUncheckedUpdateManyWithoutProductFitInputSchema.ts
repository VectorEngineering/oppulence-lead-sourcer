import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            assessor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            scores: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            notes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
        })
        .strict()

export default LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitInputSchema
