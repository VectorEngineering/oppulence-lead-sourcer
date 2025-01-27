import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AutomationConditionCreateManyAutomationInputSchema: z.ZodType<Prisma.AutomationConditionCreateManyAutomationInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        operator: z.string(),
        value: z.string()
    })
    .strict()

export default AutomationConditionCreateManyAutomationInputSchema
