import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AutomationActionCreateWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionCreateWithoutAutomationInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        value: z.string(),
        template: z.string().optional().nullable()
    })
    .strict()

export default AutomationActionCreateWithoutAutomationInputSchema
