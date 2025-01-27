import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookIncludeSchema } from '../inputTypeSchemas/WebhookIncludeSchema'
import { WebhookWhereInputSchema } from '../inputTypeSchemas/WebhookWhereInputSchema'
import { WebhookOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookOrderByWithRelationInputSchema'
import { WebhookWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookWhereUniqueInputSchema'
import { WebhookScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookScalarFieldEnumSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { InstalledIntegrationArgsSchema } from './InstalledIntegrationArgsSchema'
import { LinkWebhookFindManyArgsSchema } from './LinkWebhookFindManyArgsSchema'
import { WebhookLogFindManyArgsSchema } from './WebhookLogFindManyArgsSchema'
import { WebhookCountOutputTypeArgsSchema } from './WebhookCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebhookSelectSchema: z.ZodType<Prisma.WebhookSelect> = z
    .object({
        id: z.boolean().optional(),
        projectId: z.boolean().optional(),
        installationId: z.boolean().optional(),
        receiver: z.boolean().optional(),
        name: z.boolean().optional(),
        url: z.boolean().optional(),
        secret: z.boolean().optional(),
        triggers: z.boolean().optional(),
        consecutiveFailures: z.boolean().optional(),
        lastFailedAt: z.boolean().optional(),
        disabledAt: z.boolean().optional(),
        maxRetries: z.boolean().optional(),
        lastErrorMessage: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        timeout: z.boolean().optional(),
        status: z.boolean().optional(),
        verificationToken: z.boolean().optional(),
        ipWhitelist: z.boolean().optional(),
        rateLimitPerMinute: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        installedIntegration: z.union([z.boolean(), z.lazy(() => InstalledIntegrationArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkWebhookFindManyArgsSchema)]).optional(),
        logs: z.union([z.boolean(), z.lazy(() => WebhookLogFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => WebhookCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const WebhookFindFirstArgsSchema: z.ZodType<Prisma.WebhookFindFirstArgs> = z
    .object({
        select: WebhookSelectSchema.optional(),
        include: WebhookIncludeSchema.optional(),
        where: WebhookWhereInputSchema.optional(),
        orderBy: z.union([WebhookOrderByWithRelationInputSchema.array(), WebhookOrderByWithRelationInputSchema]).optional(),
        cursor: WebhookWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([WebhookScalarFieldEnumSchema, WebhookScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default WebhookFindFirstArgsSchema
