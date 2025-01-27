import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumWebhookReceiverFilterSchema } from './EnumWebhookReceiverFilterSchema'
import { WebhookReceiverSchema } from './WebhookReceiverSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { EnumWebhookStatusFilterSchema } from './EnumWebhookStatusFilterSchema'
import { WebhookStatusSchema } from './WebhookStatusSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { InstalledIntegrationNullableRelationFilterSchema } from './InstalledIntegrationNullableRelationFilterSchema'
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema'
import { LinkWebhookListRelationFilterSchema } from './LinkWebhookListRelationFilterSchema'
import { WebhookLogListRelationFilterSchema } from './WebhookLogListRelationFilterSchema'

export const WebhookWhereUniqueInputSchema: z.ZodType<Prisma.WebhookWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            installationId: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            installationId: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                installationId: z.string().optional(),
                AND: z.union([z.lazy(() => WebhookWhereInputSchema), z.lazy(() => WebhookWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => WebhookWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => WebhookWhereInputSchema), z.lazy(() => WebhookWhereInputSchema).array()]).optional(),
                projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                receiver: z.union([z.lazy(() => EnumWebhookReceiverFilterSchema), z.lazy(() => WebhookReceiverSchema)]).optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                secret: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                triggers: z.lazy(() => JsonFilterSchema).optional(),
                consecutiveFailures: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                lastFailedAt: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                disabledAt: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                maxRetries: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                lastErrorMessage: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                timeout: z
                    .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
                    .optional()
                    .nullable(),
                status: z.union([z.lazy(() => EnumWebhookStatusFilterSchema), z.lazy(() => WebhookStatusSchema)]).optional(),
                verificationToken: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                ipWhitelist: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                rateLimitPerMinute: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
                installedIntegration: z
                    .union([
                        z.lazy(() => InstalledIntegrationNullableRelationFilterSchema),
                        z.lazy(() => InstalledIntegrationWhereInputSchema)
                    ])
                    .optional()
                    .nullable(),
                links: z.lazy(() => LinkWebhookListRelationFilterSchema).optional(),
                logs: z.lazy(() => WebhookLogListRelationFilterSchema).optional()
            })
            .strict()
    )

export default WebhookWhereUniqueInputSchema
