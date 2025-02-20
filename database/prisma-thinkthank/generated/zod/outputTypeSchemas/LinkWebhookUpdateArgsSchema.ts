import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkWebhookIncludeSchema } from '../inputTypeSchemas/LinkWebhookIncludeSchema'
import { LinkWebhookUpdateInputSchema } from '../inputTypeSchemas/LinkWebhookUpdateInputSchema'
import { LinkWebhookUncheckedUpdateInputSchema } from '../inputTypeSchemas/LinkWebhookUncheckedUpdateInputSchema'
import { LinkWebhookWhereUniqueInputSchema } from '../inputTypeSchemas/LinkWebhookWhereUniqueInputSchema'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { WebhookArgsSchema } from '../outputTypeSchemas/WebhookArgsSchema'
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

export const LinkWebhookUpdateArgsSchema: z.ZodType<Prisma.LinkWebhookUpdateArgs> = z
    .object({
        select: LinkWebhookSelectSchema.optional(),
        include: LinkWebhookIncludeSchema.optional(),
        data: z.union([LinkWebhookUpdateInputSchema, LinkWebhookUncheckedUpdateInputSchema]),
        where: LinkWebhookWhereUniqueInputSchema
    })
    .strict()

export default LinkWebhookUpdateArgsSchema
