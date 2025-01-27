import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkWebhookIncludeSchema } from '../inputTypeSchemas/LinkWebhookIncludeSchema'
import { LinkWebhookWhereInputSchema } from '../inputTypeSchemas/LinkWebhookWhereInputSchema'
import { LinkWebhookOrderByWithRelationInputSchema } from '../inputTypeSchemas/LinkWebhookOrderByWithRelationInputSchema'
import { LinkWebhookWhereUniqueInputSchema } from '../inputTypeSchemas/LinkWebhookWhereUniqueInputSchema'
import { LinkWebhookScalarFieldEnumSchema } from '../inputTypeSchemas/LinkWebhookScalarFieldEnumSchema'
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

export const LinkWebhookFindManyArgsSchema: z.ZodType<Prisma.LinkWebhookFindManyArgs> = z
    .object({
        select: LinkWebhookSelectSchema.optional(),
        include: LinkWebhookIncludeSchema.optional(),
        where: LinkWebhookWhereInputSchema.optional(),
        orderBy: z.union([LinkWebhookOrderByWithRelationInputSchema.array(), LinkWebhookOrderByWithRelationInputSchema]).optional(),
        cursor: LinkWebhookWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LinkWebhookScalarFieldEnumSchema, LinkWebhookScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LinkWebhookFindManyArgsSchema
