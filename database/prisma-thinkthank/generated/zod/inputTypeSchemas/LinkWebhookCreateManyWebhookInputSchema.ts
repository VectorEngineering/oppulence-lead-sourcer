import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LinkWebhookCreateManyWebhookInputSchema: z.ZodType<Prisma.LinkWebhookCreateManyWebhookInput> = z
    .object({
        id: z.string().cuid().optional(),
        linkId: z.string()
    })
    .strict()

export default LinkWebhookCreateManyWebhookInputSchema
