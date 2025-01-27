import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AutomationActionUncheckedCreateWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionUncheckedCreateWithoutAutomationInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            field: z.string(),
            value: z.string(),
            template: z.string().optional().nullable()
        })
        .strict()

export default AutomationActionUncheckedCreateWithoutAutomationInputSchema
