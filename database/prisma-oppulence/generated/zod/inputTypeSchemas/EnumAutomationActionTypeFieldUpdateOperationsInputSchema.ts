import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'

export const EnumAutomationActionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAutomationActionTypeFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => AutomationActionTypeSchema).optional()
        })
        .strict()

export default EnumAutomationActionTypeFieldUpdateOperationsInputSchema
