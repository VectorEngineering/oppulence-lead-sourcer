import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateNestedOneWithoutWebhooksInputSchema } from './LinkCreateNestedOneWithoutWebhooksInputSchema'

export const LinkWebhookCreateWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookCreateWithoutWebhookInput> = z
    .object({
        id: z.string().cuid().optional(),
        link: z.lazy(() => LinkCreateNestedOneWithoutWebhooksInputSchema)
    })
    .strict()

export default LinkWebhookCreateWithoutWebhookInputSchema
