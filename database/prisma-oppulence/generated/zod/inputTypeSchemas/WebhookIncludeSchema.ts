import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { InstalledIntegrationArgsSchema } from '../outputTypeSchemas/InstalledIntegrationArgsSchema'
import { LinkWebhookFindManyArgsSchema } from '../outputTypeSchemas/LinkWebhookFindManyArgsSchema'
import { WebhookLogFindManyArgsSchema } from '../outputTypeSchemas/WebhookLogFindManyArgsSchema'
import { WebhookCountOutputTypeArgsSchema } from '../outputTypeSchemas/WebhookCountOutputTypeArgsSchema'

export const WebhookIncludeSchema: z.ZodType<Prisma.WebhookInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        installedIntegration: z.union([z.boolean(), z.lazy(() => InstalledIntegrationArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkWebhookFindManyArgsSchema)]).optional(),
        logs: z.union([z.boolean(), z.lazy(() => WebhookLogFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => WebhookCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default WebhookIncludeSchema
