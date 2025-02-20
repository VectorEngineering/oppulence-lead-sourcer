import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookLogIncludeSchema } from '../inputTypeSchemas/WebhookLogIncludeSchema'
import { WebhookLogWhereInputSchema } from '../inputTypeSchemas/WebhookLogWhereInputSchema'
import { WebhookLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookLogOrderByWithRelationInputSchema'
import { WebhookLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookLogWhereUniqueInputSchema'
import { WebhookLogScalarFieldEnumSchema } from '../inputTypeSchemas/WebhookLogScalarFieldEnumSchema'
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

export const WebhookLogFindFirstArgsSchema: z.ZodType<Prisma.WebhookLogFindFirstArgs> = z
    .object({
        select: WebhookLogSelectSchema.optional(),
        include: WebhookLogIncludeSchema.optional(),
        where: WebhookLogWhereInputSchema.optional(),
        orderBy: z.union([WebhookLogOrderByWithRelationInputSchema.array(), WebhookLogOrderByWithRelationInputSchema]).optional(),
        cursor: WebhookLogWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([WebhookLogScalarFieldEnumSchema, WebhookLogScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default WebhookLogFindFirstArgsSchema
