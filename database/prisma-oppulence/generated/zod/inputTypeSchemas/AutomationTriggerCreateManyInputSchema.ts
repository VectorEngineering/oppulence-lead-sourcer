import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AutomationTriggerCreateManyInputSchema: z.ZodType<Prisma.AutomationTriggerCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        automationId: z.string(),
        field: z.string(),
        operator: z.string(),
        value: z.string()
    })
    .strict()

export default AutomationTriggerCreateManyInputSchema
