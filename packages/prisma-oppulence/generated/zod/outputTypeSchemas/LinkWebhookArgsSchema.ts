import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkWebhookSelectSchema } from '../inputTypeSchemas/LinkWebhookSelectSchema'
import { LinkWebhookIncludeSchema } from '../inputTypeSchemas/LinkWebhookIncludeSchema'

export const LinkWebhookArgsSchema: z.ZodType<Prisma.LinkWebhookDefaultArgs> = z
    .object({
        select: z.lazy(() => LinkWebhookSelectSchema).optional(),
        include: z.lazy(() => LinkWebhookIncludeSchema).optional()
    })
    .strict()

export default LinkWebhookArgsSchema
