import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitNestedInputSchema } from './LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitNestedInputSchema'

export const LeadProductFitUncheckedUpdateInputSchema: z.ZodType<Prisma.LeadProductFitUncheckedUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        leadId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        technicalFit: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        businessFit: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        culturalFit: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        budgetFit: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        overallFit: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        strengthsWeaknesses: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        customizationNeeds: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        implementationComplexity: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        requiredFeatures: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        optionalFeatures: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        dealBreakers: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        integrationComplexity: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        integrationRisks: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        integrationCosts: z
            .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        implementationTimeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        trainingNeeds: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        assessments: z.lazy(() => LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitNestedInputSchema).optional()
    })
    .strict()

export default LeadProductFitUncheckedUpdateInputSchema
