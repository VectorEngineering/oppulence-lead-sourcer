import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookLogWhereInputSchema } from '../inputTypeSchemas/WebhookLogWhereInputSchema'
import { WebhookLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/WebhookLogOrderByWithRelationInputSchema'
import { WebhookLogWhereUniqueInputSchema } from '../inputTypeSchemas/WebhookLogWhereUniqueInputSchema'

export const WebhookLogAggregateArgsSchema: z.ZodType<Prisma.WebhookLogAggregateArgs> = z
    .object({
        where: WebhookLogWhereInputSchema.optional(),
        orderBy: z.union([WebhookLogOrderByWithRelationInputSchema.array(), WebhookLogOrderByWithRelationInputSchema]).optional(),
        cursor: WebhookLogWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default WebhookLogAggregateArgsSchema
