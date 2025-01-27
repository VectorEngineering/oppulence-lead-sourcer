import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const WebhookCountOutputTypeSelectSchema: z.ZodType<Prisma.WebhookCountOutputTypeSelect> = z
    .object({
        links: z.boolean().optional(),
        logs: z.boolean().optional()
    })
    .strict()

export default WebhookCountOutputTypeSelectSchema
