import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookLogIncludeSchema } from '../inputTypeSchemas/WebhookLogIncludeSchema'
import { WebhookLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookLogWhereUniqueInputSchema'
import { WebhookLogCreateInputSchema } from '../inputTypeSchemas/WebhookLogCreateInputSchema'
import { WebhookLogUncheckedCreateInputSchema } from '../inputTypeSchemas/WebhookLogUncheckedCreateInputSchema'
import { WebhookLogUpdateInputSchema } from '../inputTypeSchemas/WebhookLogUpdateInputSchema'
import { WebhookLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/WebhookLogUncheckedUpdateInputSchema'
import { WebhookArgsSchema } from '../outputTypeSchemas/WebhookArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WebhookLogSelectSchema: z.ZodType<Prisma.WebhookLogSelect> = z
    .object({
        id: z.boolean().optional(),
        webhookId: z.boolean().optional(),
        requestBody: z.boolean().optional(),
        responseBody: z.boolean().optional(),
        statusCode: z.boolean().optional(),
        duration: z.boolean().optional(),
        success: z.boolean().optional(),
        errorMessage: z.boolean().optional(),
        timestamp: z.boolean().optional(),
        webhook: z.union([z.boolean(), z.lazy(() => WebhookArgsSchema)]).optional()
    })
    .strict()

export const WebhookLogUpsertArgsSchema: z.ZodType<Prisma.WebhookLogUpsertArgs> = z
    .object({
        select: WebhookLogSelectSchema.optional(),
        include: WebhookLogIncludeSchema.optional(),
        where: WebhookLogWhereUniqueInputSchema,
        create: z.union([WebhookLogCreateInputSchema, WebhookLogUncheckedCreateInputSchema]),
        update: z.union([WebhookLogUpdateInputSchema, WebhookLogUncheckedUpdateInputSchema])
    })
    .strict()

export default WebhookLogUpsertArgsSchema
