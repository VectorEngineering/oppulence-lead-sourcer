import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { BudgetStatusSchema } from './BudgetStatusSchema'
import { EnumBudgetStatusFieldUpdateOperationsInputSchema } from './EnumBudgetStatusFieldUpdateOperationsInputSchema'
import { ApprovalStatusSchema } from './ApprovalStatusSchema'
import { EnumApprovalStatusFieldUpdateOperationsInputSchema } from './EnumApprovalStatusFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LeadUpdateOneRequiredWithoutLeadBudgetNestedInputSchema } from './LeadUpdateOneRequiredWithoutLeadBudgetNestedInputSchema'
import { LeadBudgetRevisionUpdateManyWithoutBudgetNestedInputSchema } from './LeadBudgetRevisionUpdateManyWithoutBudgetNestedInputSchema'

export const LeadBudgetUpdateWithoutExpensesInputSchema: z.ZodType<Prisma.LeadBudgetUpdateWithoutExpensesInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        totalBudget: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        allocatedBudget: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        remainingBudget: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        spentBudget: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        productCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        serviceCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        implementationCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        maintenanceCost: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
        fiscalYear: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        quarterlyBreakdown: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        monthlyBreakdown: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        status: z.union([z.lazy(() => BudgetStatusSchema), z.lazy(() => EnumBudgetStatusFieldUpdateOperationsInputSchema)]).optional(),
        approvalStatus: z
            .union([z.lazy(() => ApprovalStatusSchema), z.lazy(() => EnumApprovalStatusFieldUpdateOperationsInputSchema)])
            .optional(),
        approvedBy: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        approvedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        lead: z.lazy(() => LeadUpdateOneRequiredWithoutLeadBudgetNestedInputSchema).optional(),
        revisions: z.lazy(() => LeadBudgetRevisionUpdateManyWithoutBudgetNestedInputSchema).optional()
    })
    .strict()

export default LeadBudgetUpdateWithoutExpensesInputSchema
