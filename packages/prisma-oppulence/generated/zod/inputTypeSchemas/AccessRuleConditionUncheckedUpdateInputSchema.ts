import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const AccessRuleConditionUncheckedUpdateInputSchema: z.ZodType<Prisma.AccessRuleConditionUncheckedUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        ruleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        operator: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default AccessRuleConditionUncheckedUpdateInputSchema
