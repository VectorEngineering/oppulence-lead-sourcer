import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { ComplianceTypeSchema } from './ComplianceTypeSchema'
import { EnumComplianceTypeFieldUpdateOperationsInputSchema } from './EnumComplianceTypeFieldUpdateOperationsInputSchema'
import { ComplianceStatusSchema } from './ComplianceStatusSchema'
import { EnumComplianceStatusFieldUpdateOperationsInputSchema } from './EnumComplianceStatusFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LeadComplianceHistoryUpdateManyWithoutComplianceAuditNestedInputSchema } from './LeadComplianceHistoryUpdateManyWithoutComplianceAuditNestedInputSchema'

export const LeadComplianceAuditUpdateWithoutLeadInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateWithoutLeadInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        type: z.union([z.lazy(() => ComplianceTypeSchema), z.lazy(() => EnumComplianceTypeFieldUpdateOperationsInputSchema)]).optional(),
        status: z
            .union([z.lazy(() => ComplianceStatusSchema), z.lazy(() => EnumComplianceStatusFieldUpdateOperationsInputSchema)])
            .optional(),
        findings: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        requirements: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        documentation: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        evidences: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        riskLevel: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        riskFactors: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        mitigationSteps: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        reviewedBy: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        reviewedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        nextReviewDate: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        auditHistory: z.lazy(() => LeadComplianceHistoryUpdateManyWithoutComplianceAuditNestedInputSchema).optional()
    })
    .strict()

export default LeadComplianceAuditUpdateWithoutLeadInputSchema
