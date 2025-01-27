import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AutomationActionUncheckedCreateInputSchema: z.ZodType<Prisma.AutomationActionUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        automationId: z.string(),
        field: z.string(),
        value: z.string(),
        template: z.string().optional().nullable()
    })
    .strict()

export default AutomationActionUncheckedCreateInputSchema
