import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WebhookCreateManyInputSchema } from '../inputTypeSchemas/WebhookCreateManyInputSchema'

export const WebhookCreateManyArgsSchema: z.ZodType<Prisma.WebhookCreateManyArgs> = z
    .object({
        data: z.union([WebhookCreateManyInputSchema, WebhookCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default WebhookCreateManyArgsSchema
