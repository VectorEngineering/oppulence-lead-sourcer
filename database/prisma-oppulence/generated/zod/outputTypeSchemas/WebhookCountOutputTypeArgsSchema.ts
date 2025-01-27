import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookCountOutputTypeSelectSchema } from './WebhookCountOutputTypeSelectSchema'

export const WebhookCountOutputTypeArgsSchema: z.ZodType<Prisma.WebhookCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => WebhookCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default WebhookCountOutputTypeSelectSchema
