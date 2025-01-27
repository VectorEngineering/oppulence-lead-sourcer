import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkWebhookIncludeSchema } from '../inputTypeSchemas/LinkWebhookIncludeSchema'
import { LinkWebhookWhereUniqueInputSchema } from '../inputTypeSchemas/LinkWebhookWhereUniqueInputSchema'
import { LinkArgsSchema } from './LinkArgsSchema'
import { WebhookArgsSchema } from './WebhookArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LinkWebhookSelectSchema: z.ZodType<Prisma.LinkWebhookSelect> = z
    .object({
        id: z.boolean().optional(),
        linkId: z.boolean().optional(),
        webhookId: z.boolean().optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        webhook: z.union([z.boolean(), z.lazy(() => WebhookArgsSchema)]).optional()
    })
    .strict()

export const LinkWebhookDeleteArgsSchema: z.ZodType<Prisma.LinkWebhookDeleteArgs> = z
    .object({
        select: LinkWebhookSelectSchema.optional(),
        include: LinkWebhookIncludeSchema.optional(),
        where: LinkWebhookWhereUniqueInputSchema
    })
    .strict()

export default LinkWebhookDeleteArgsSchema
