import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema'
import { EnumAutomationTriggerTypeFieldUpdateOperationsInputSchema } from './EnumAutomationTriggerTypeFieldUpdateOperationsInputSchema'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'
import { EnumAutomationActionTypeFieldUpdateOperationsInputSchema } from './EnumAutomationActionTypeFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'

export const PipelineAutomationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PipelineAutomationUncheckedUpdateManyInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        pipelineId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        triggerType: z
            .union([z.lazy(() => AutomationTriggerTypeSchema), z.lazy(() => EnumAutomationTriggerTypeFieldUpdateOperationsInputSchema)])
            .optional(),
        actionType: z
            .union([z.lazy(() => AutomationActionTypeSchema), z.lazy(() => EnumAutomationActionTypeFieldUpdateOperationsInputSchema)])
            .optional(),
        priority: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        lastTriggered: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default PipelineAutomationUncheckedUpdateManyInputSchema
