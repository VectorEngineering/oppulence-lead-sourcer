import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AutomationActionCreateManyAutomationInputSchema: z.ZodType<Prisma.AutomationActionCreateManyAutomationInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        value: z.string(),
        template: z.string().optional().nullable()
    })
    .strict()

export default AutomationActionCreateManyAutomationInputSchema
