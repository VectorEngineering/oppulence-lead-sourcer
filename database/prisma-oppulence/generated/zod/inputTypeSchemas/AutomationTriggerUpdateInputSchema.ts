import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { PipelineAutomationUpdateOneRequiredWithoutTriggersNestedInputSchema } from './PipelineAutomationUpdateOneRequiredWithoutTriggersNestedInputSchema'

export const AutomationTriggerUpdateInputSchema: z.ZodType<Prisma.AutomationTriggerUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        operator: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        automation: z.lazy(() => PipelineAutomationUpdateOneRequiredWithoutTriggersNestedInputSchema).optional()
    })
    .strict()

export default AutomationTriggerUpdateInputSchema
