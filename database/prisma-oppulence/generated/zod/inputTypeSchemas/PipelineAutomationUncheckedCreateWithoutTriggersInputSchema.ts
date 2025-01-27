import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'
import { AutomationActionUncheckedCreateNestedManyWithoutAutomationInputSchema } from './AutomationActionUncheckedCreateNestedManyWithoutAutomationInputSchema'
import { AutomationConditionUncheckedCreateNestedManyWithoutAutomationInputSchema } from './AutomationConditionUncheckedCreateNestedManyWithoutAutomationInputSchema'

export const PipelineAutomationUncheckedCreateWithoutTriggersInputSchema: z.ZodType<Prisma.PipelineAutomationUncheckedCreateWithoutTriggersInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            pipelineId: z.string(),
            name: z.string(),
            description: z.string().optional().nullable(),
            isActive: z.boolean().optional(),
            triggerType: z.lazy(() => AutomationTriggerTypeSchema),
            actionType: z.lazy(() => AutomationActionTypeSchema),
            priority: z.number().int().optional(),
            createdAt: z.coerce.date().optional(),
            updatedAt: z.coerce.date().optional(),
            lastTriggered: z.coerce.date().optional().nullable(),
            actions: z.lazy(() => AutomationActionUncheckedCreateNestedManyWithoutAutomationInputSchema).optional(),
            conditions: z.lazy(() => AutomationConditionUncheckedCreateNestedManyWithoutAutomationInputSchema).optional()
        })
        .strict()

export default PipelineAutomationUncheckedCreateWithoutTriggersInputSchema
