import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PipelineAutomationUpdateOneRequiredWithoutActionsNestedInputSchema } from './PipelineAutomationUpdateOneRequiredWithoutActionsNestedInputSchema'

export const AutomationActionUpdateInputSchema: z.ZodType<Prisma.AutomationActionUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        template: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        automation: z.lazy(() => PipelineAutomationUpdateOneRequiredWithoutActionsNestedInputSchema).optional()
    })
    .strict()

export default AutomationActionUpdateInputSchema
