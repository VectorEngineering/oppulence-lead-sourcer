import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { PipelineAccessRuleUpdateOneRequiredWithoutConditionsNestedInputSchema } from './PipelineAccessRuleUpdateOneRequiredWithoutConditionsNestedInputSchema'

export const AccessRuleConditionUpdateInputSchema: z.ZodType<Prisma.AccessRuleConditionUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        operator: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        rule: z.lazy(() => PipelineAccessRuleUpdateOneRequiredWithoutConditionsNestedInputSchema).optional()
    })
    .strict()

export default AccessRuleConditionUpdateInputSchema
