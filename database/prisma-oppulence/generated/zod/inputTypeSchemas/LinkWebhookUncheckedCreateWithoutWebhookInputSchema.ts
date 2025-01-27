import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LinkWebhookUncheckedCreateWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedCreateWithoutWebhookInput> = z
    .object({
        id: z.string().cuid().optional(),
        linkId: z.string()
    })
    .strict()

export default LinkWebhookUncheckedCreateWithoutWebhookInputSchema
