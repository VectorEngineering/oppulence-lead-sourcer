import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema'

export const EnumAutomationTriggerTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAutomationTriggerTypeFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => AutomationTriggerTypeSchema).optional()
        })
        .strict()

export default EnumAutomationTriggerTypeFieldUpdateOperationsInputSchema
