import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
            category: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            receipt: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            expenseDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
        })
        .strict()

export default LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetInputSchema
